import React, { useCallback, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, useSlate, Slate, useSelected, useFocused } from "slate-react";
import { Editor, Transforms, createEditor, Text } from "slate";
import { withHistory } from "slate-history";
import { Toolbar, IconButton, Icon } from "@material-ui/core";
import {
    Filter1,
    Filter2,
    FormatQuote,
    FormatBold,
    FormatItalic,
    FormatUnderlined,
    FormatListBulleted,
    FormatListNumbered,
    Code,
    Image,
} from "@material-ui/icons";
import escapeHtml from "escape-html";
import isUrl from "is-url";
import imageExtensions from "image-extensions";

const HOTKEYS = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+`": "code"
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const RichTextExample = () => {
    const [value, setValue] = useState(initialValue);
    const renderElement = useCallback(
        props => {

            switch (props.element.type) {
                case 'image':
                    return <ImageElement {...props} />;
                default:
                    return <Element {...props} />;
            }
        }, 
        []
    );

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />;
    }, []);
    const editor = useMemo(() => withImages(withHistory(withReact(createEditor()))), []);
    console.log('editor: ', editor);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={value => {
                setValue(value);

                console.log('value: ', value);
                console.log('serialize output: ', serialize({children: [...value]}));
            }}
        >
            <Toolbar>
                <MarkButton format="bold">
                    <FormatBold />
                </MarkButton>

                <BlockButon format="heading-one">
                    <Filter1 />
                </BlockButon>
                <BlockButon format="numbered-list">
                    <FormatListNumbered />
                </BlockButon>
                <BlockButon format="image">
                    <Image />
                </BlockButon>
            </Toolbar>

            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder={"Write here..."}
                onKeyDown={event => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, event)) {
                            event.preventDefault();

                            const mark = HOTKEYS[hotkey];
                            toggleMark(editor, mark);
                        }
                    }
                }}
            />
        </Slate>
    );
};

export default RichTextExample;

const withImages = editor => {
    const { insertData, isVoid } = editor;

    editor.isVoid = element => {
        return element.type === 'image' ? true : isVoid(element);
    }

    editor.insertData = data => {
        const text = data.getData("text/plain");
        const { files } = data;

        if (files && files.length > 0) {
            for (const file of files) {
                const reader = new FileReader();
                const [mime] = file.type.split("/");
    
                if (mime === "image") {
                    reader.addEventListener("load", () => {
                        const url = reader.result;
                        insertImage(editor, url);
                    });
    
                    reader.readAsDataURL(file);
                }
            }
        }
        else if (isImageURL(text)) {
            insertImage(editor, text);
        }
        else {
            insertData(data);
        }
    }
    console.log('withImages editor: ', editor)
    return editor;
}

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case "block-quote":
            return <blockquote {...attributes}>{children}</blockquote>;
        case "bulleted-list":
            return <ul {...attributes}>{children}</ul>;
        case "heading-one":
            return <h1 {...attributes}>{children}</h1>;
        case "heading-two":
            return <h2 {...attributes}>{children}</h2>;
        case "list-item":
            return <li {...attributes}>{children}</li>;
        case "numbered-list":
            return <ol {...attributes}>{children}</ol>;
        default:
            return <p {...attributes}>{children}</p>;
    }
};

const ImageElement = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();

    return (
        <div {...attributes}>
            <div contentEditable={false}>
                <img src={element.url}
                    style={{display: "block", 
                        maxWidth: "100%", 
                        maxHeight: "20em", 
                        boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`}}/>
            </div>
            {children}
        </div>
    )
};

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }

    if (leaf.code) {
        children = <code>{children}</code>;
    }

    if (leaf.italic) {
        children = <em>{children}</em>;
    }

    if (leaf.underline) {
        children = <u>{children}</u>;
    }

    return <span {...attributes}>{children}</span>;
};

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

const MarkButton = ({ format, children }) => {
    const editor = useSlate();
    return (
        <IconButton
            onMouseDown={event => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
        >
            {children}
        </IconButton>
    );
};

const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === format
    });

    return !!match;
};

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: n => LIST_TYPES.includes(n.type),
        split: true
    });

    Transforms.setNodes(editor, {
        type: isActive ? "paragraph" : isList ? "list-item" : format
    });

    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

const isImageURL = url => {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split('.').pop();
    return imageExtensions.includes(ext);
}

const insertImage = (editor, url) => {
    const text = { text: "" };
    const image = { 
        type: 'image', 
        url, 
        children: [text]
    };
    Transforms.insertNodes(editor, image);
}

const BlockButon = ({ format, children }) => {
    const editor = useSlate();

    return (
        <IconButton
            onMouseDown={event => {
                event.preventDefault();

                if (format === "image")
                {
                    const url = window.prompt("Enter the URL of image: ");
                    if (!url) return;
                    insertImage(editor, url);
                }
                else
                {
                    toggleBlock(editor, format);
                }
            }}
        >
            {children}
        </IconButton>
    );
};

const initialValue = [
    {
        type: "paragraph",
        children: [
            { text: "This is editable " },
            { text: "rich", bold: true },
            { text: " text, " },
            { text: "much", italic: true },
            { text: " better than a " },
            { text: "<textarea>", code: true },
            { text: "!" }
        ]
    },
    {
        type: "paragraph",
        children: [
            {
                text:
                    "Since it's rich text, you can do things like turn a selection of text "
            },
            { text: "bold", bold: true },
            {
                text:
                    ", or add a semantically rendered block quote in the middle of the page, like this:"
            }
        ]
    },
    {
        type: "block-quote",
        children: [{ text: "A wise quote." }]
    },
    {
        type: "paragraph",
        children: [{ text: "Try it out for yourself!" }]
    }
];

const serialize = node => {
    // markdown to html
    
    if (Text.isText(node)) {
        if (node.bold) return `<strong>${escapeHtml(node.text)}</strong>`;
        if (node.code) return `<code>${escapeHtml(node.text)}</code>`;
        if (node.italic) return `<em>${escapeHtml(node.text)}</em>`;
        if (node.underline) return `<u>${escapeHtml(node.text)}</u>`;
        return `${escapeHtml(node.text)}`;
    }

    const children = node.children.map(n => serialize(n)).join("");

    switch (node.type) {
        case "block-quote":
            return `<blockquote>${children}</blockquote>`;
        case "bulleted-list":
            return `<ul>${children}</ul>`;
        case "heading-one":
            return `<h1>${children}</h1>`;
        case "heading-two":
            return `<h>${children}</h2>`;
        case "list-item":
            return `<li>${children}</li>`;
        case "numbered-list":
            return `<ol>${children}</ol>`;
        case "paragraph":
            return `<p>${children}</p>`;
        default:
            return children;
    }
};

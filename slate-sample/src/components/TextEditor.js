// Import React dependencies.
import React, { useMemo, useState, useCallback } from "react";
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Text } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

// Import the `Node` helper interface from Slate.
import { Node } from "slate";

// Define a serializing function that takes a value and returns a string.
const serialize = value => {
    return (
        value
            // Return the string content of each paragraph in the value's children.
            .map(n => Node.string(n))
            // Join them all with line breaks denoting paragraphs.
            .join("\n")
    );
};

// Define a deserializing function that takes a string and returns a value.
const deserialize = string => {
    // Return a value array of children derived by splitting the string.
    return string.split("\n").map(line => {
        return {
            children: [{ text: line }]
        };
    });
};

// TODO: using the bundle source
const TextEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    // const [value, setValue] = useState([
    //     {
    //         type: "paragraph",
    //         children: [{ text: "A line of text in a paragraph." }]
    //     }
    // ]);

    // Use our deserializing function to read the data from Local Storage.
    const [value, setValue] = useState(
        deserialize(localStorage.getItem("content")) || ""
    );

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case "code":
                return <CodeElement {...props} />;
            default:
                return <DefaultElement {...props} />;
        }
    }, []);

    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />;
    }, []);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={value => {
                console.log(value);
                setValue(value);

                localStorage.setItem("content", serialize(value));
            }}
        >
            <div>
                <button
                    onMouseDown={event => {
                        event.preventDefault();
                        CustomEditor.toggleBoldMark(editor);
                    }}
                >
                    Bold
                </button>
                <button
                    onMouseDown={event => {
                        event.preventDefault();
                        CustomEditor.toggleCodeBlock(editor);
                    }}
                >
                    Code Block
                </button>
            </div>
            <Editable
                renderElement={renderElement}
                // Pass in the `renderLeaf` function.
                renderLeaf={renderLeaf}
                onKeyDown={event => {
                    if (!event.ctrlKey) {
                        return;
                    }

                    switch (event.key) {
                        case "`": {
                            console.log("ctrl + `");
                            event.preventDefault();
                            CustomEditor.toggleCodeBlock(editor);
                            break;
                        }

                        case "b": {
                            console.log("ctrl + b");
                            event.preventDefault();
                            CustomEditor.toggleBoldMark(editor);
                            break;
                        }

                        default:
                            console.log("error");
                    }
                }}
            />
        </Slate>
    );
};

export default TextEditor;

// Define a React component renderer for our code blocks.
const CodeElement = props => {
    console.log("code: ", props);
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    );
};

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>;
};

// Define a React component to render leaves with bold text.
const Leaf = props => {
    return (
        <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
        >
            {props.children}
        </span>
    );
};

// Define our own custom set of helpers.
const CustomEditor = {
    isBoldMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true,
            universal: true
        });

        return !!match;
    },

    isCodeBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === "code"
        });

        return !!match;
    },

    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor);
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        );
    },

    toggleCodeBlock(editor) {
        const isActive = CustomEditor.isCodeBlockActive(editor);
        Transforms.setNodes(
            editor,
            { type: isActive ? null : "code" },
            { match: n => Editor.isBlock(editor, n) }
        );
    }
};

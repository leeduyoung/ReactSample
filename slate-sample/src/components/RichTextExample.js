import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { Editor, Transforms, createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Toolbar, IconButton } from "@material-ui/core"
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
  } from "@material-ui/icons"
// import { Button, Icon, Toolbar } from '../components'

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};

const LIST_TYPES = [
    'numbered-list',
    'bulleted-list'
];

const RichTextExample = () => {

    const [value, setValue] = useState(initialValue);
    const renderElement = useCallback(props => {
        return <Element {...props} />
    }, []);

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, []);
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])
    console.log(editor)

    return (
        <Slate editor={editor}
            value={value}
            onChange={value => setValue(value)}>

            <Toolbar>
                <MarkButton format="bold" icon="format_bold" />
                <BlockButon format="heading-one" icon="looks_one" />
            </Toolbar>

            <Editable renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder={"Write here..."}
                onKeyDown={event => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, event)) {
                            event.preventDefault();

                            const mark = HOTKEYS[hotkey];
                            toggleMark(editor, mark)
                        }
                    }
                }}
            />
        </Slate>
    )
}

export default RichTextExample;

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        default:
            return <p {...attributes}>{children}</p>
    }
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
}

const MarkButton = ({format, icon}) => {
    const editor = useSlate();

    // TODO: 

    return (
        <IconButton>
            <FormatBold />
        </IconButton>
    );
}

const BlockButon = ({format, icon}) => {
    const editor = useSlate();

    // TODO: 

    return (
        <IconButton>
            <Filter1 />
        </IconButton>
    );
}

const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: 'This is editable ' },
            { text: 'rich', bold: true },
            { text: ' text, ' },
            { text: 'much', italic: true },
            { text: ' better than a ' },
            { text: '<textarea>', code: true },
            { text: '!' },
        ],
    },
    {
        type: 'paragraph',
        children: [
            {
                text:
                    "Since it's rich text, you can do things like turn a selection of text ",
            },
            { text: 'bold', bold: true },
            {
                text:
                    ', or add a semantically rendered block quote in the middle of the page, like this:',
            },
        ],
    },
    {
        type: 'block-quote',
        children: [{ text: 'A wise quote.' }],
    },
    {
        type: 'paragraph',
        children: [{ text: 'Try it out for yourself!' }],
    },
]
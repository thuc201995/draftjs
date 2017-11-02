import React,{Component} from 'react';
import {Editor, EditorState,RichUtils} from 'draft-js';

var INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
];

const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
];
class MyEditor extends Component{
    constructor(props){
        super(props);
        this.state={editorState:EditorState.createEmpty()};
        this.onChange=(editorState)=>this.setState({editorState})
    }


    inlineStyleClick=(e)=>{
        const INLINE_STYLES=e.target.dataset["item"];
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,INLINE_STYLES))
    }

    blockTypesClick=(e)=>{
        const BLOCK_TYPES=e.target.dataset["item"];

        this.onChange(RichUtils.toggleBlockType(this.state.editorState,BLOCK_TYPES))
    }
    render(){

        return(
            <div className="editor">
                {
                    INLINE_STYLES.map(type=>
                        <button onClick={this.inlineStyleClick} key={type.style} data-item={type.style}>{type.label}</button>

                    )
                }

                {
                    BLOCK_TYPES.map(type=>
                        <button onClick={this.blockTypesClick} key={type.style} data-item={type.style}>{type.label}</button>

                    )
                }
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export default MyEditor;
import React, { Component } from "react";
import SnippetTag from "components/Snippet/SnippetTag"
import TextArea from "components/TextArea/TextArea"
import "styles/element.scss";
import "styles/element-dialog.scss";

class SnippetDialog extends Component {
    constructor(prop) {
        super(prop);
        this.state = {snippet: this.props.initialState, editingContent: true, editingTag: false};
        this.contentArea = React.createRef();
    }

    handleHashChange = () => {
        if (window.location.hash=="" || window.location.hash==null)
        {
            this.props.onClose(this.props.initialState.id, this.state.snippet);
        }
    }

    handleDialogClick = () => {
        
        if (this.state.editingTag)
        {
            this.state.snippet.tags = [...this.state.snippet.tags, this.state.editedTag];
            delete this.state.editedTag;
            this.setState({snippet: this.state.snippet, editingTag: false});
        }
        this.props.onClose(this.props.initialState.id, this.state.snippet)
    }

    handleTagClick = (tag) => {
        let snippet = {...this.state.snippet }
        snippet.tags = snippet.tags.filter(t => t != tag);
        this.setState({snippet});
    }

    handleEditedTagClick = (e) => {
        e.stopPropagation();
    }

    handleSnippetClick = (e) => {
        e.stopPropagation();
        if (this.state.editingContent)
        {
            this.setState({editingContent: false});
        }
        if (this.state.editingTag)
        {
            this.state.snippet.tags.push(this.state.editedTag);
            delete this.state.editedTag;
            this.setState({snippet: this.state.snippet, editingTag: false});
        }
    }

    handleSnippetContentClick = (e) => {
        e.stopPropagation();
        this.setState({editingContent: true});
        if (this.state.editingTag)
        {
            this.state.snippet.tags.push(this.state.editedTag);
            delete this.state.editedTag;
            this.setState({snippet: this.state.snippet, editingTag: false});
        }
    }

    handleContentChange = (value) => {
        this.state.snippet.content = value;
        this.setState( {snippet: this.state.snippet} );
    }

    handleAddTag = () => {
        this.setState({editingTag: true});
    }

    handleKeyboard = (e) => {
        if (e.keyCode === 27)
        {
            if (this.state.editingContent)
            {
                this.setState({editingContent: false});
            }
            else if (this.state.editingTag)
            {
                this.state.snippet.tags.push(this.state.editedTag);
                delete this.state.editedTag;
                this.setState({snippet: this.state.snippet, editingTag: false});
            }
            else this.props.onClose(this.props.initialState.id, this.state.snippet);
        }
        else if (e.keyCode == 13)
        {
            if (this.state.editingTag)
            {
                this.state.snippet.tags.push(this.state.editedTag);
                delete this.state.editedTag;
                this.setState({snippet: this.state.snippet, editingTag: false});
            }
        }
    }

    handleEditedTagChange = (tag) => {
        this.state.editedTag = tag;
    }

    componentDidUpdate() {
        if (this.contentArea.current) this.contentArea.current.focus();
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyboard, false);
        window.addEventListener('hashchange', this.handleHashChange, false);
        window.location.hash="#edit-dialog";
        if (this.contentArea.current) this.contentArea.current.focus();
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyboard, false);
        window.removeEventListener('hashchange', this.handleHashChange, false);
        window.location.hash = "";
    }

    render()
    {
        return (
            <div className="dialog-wrapper"
                onClick={this.handleDialogClick}>
                <div className="element snippet"
                    onClick={this.handleSnippetClick}>
                        {
                            this.state.editingContent
                                ? <TextArea ref={this.contentArea} className="content" onClick={(e) => e.stopPropagation()}
                                    onChange={this.handleContentChange} value={this.state.snippet.content}
                                    lineHeight={24} padding={28}>
                                </TextArea>
                                : <div className="content" onClick={this.handleSnippetContentClick}>
                                    {this.state.snippet.content == "" ? " " : this.state.snippet.content}
                                </div>
                        }
                    <div className="tags">
                        {this.state.snippet.tags.map(tag =>
                            <SnippetTag key={tag} name={tag} onClick={() => this.handleTagClick(tag)} editMode={false}/>
                        )}
                        { this.state.editingTag && <SnippetTag key="#edited-tag#" onChange={this.handleEditedTagChange} onClick={this.handleEditedTagClick}
                            name="" editMode={true}/>}
                    </div>
                    <div className="toolbar">
                        <a className="add-tag-button tool" onClick={this.handleAddTag}>Add tag</a>
                        <a className="delete-button tool danger"
                            onClick={() => this.props.onDelete(this.props.initialState.id)}>{this.props.initialState.id === false ? "Cancel" : "Delete"}</a>
                    </div>
                    <div className="comment-bar">
                        <div className="comment"> // Click into to edit</div>
                        <div className="comment">// Click on a tag to remove it</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SnippetDialog;
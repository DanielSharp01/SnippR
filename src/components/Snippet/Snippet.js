import React, { Component } from "react";
import SnippetTag from "./SnippetTag"
import "styles/element.scss";

class Snippet extends Component {
    render()
    {
        return (
            <div className="snippet element" onClick={() => this.props.onEdit(this.props.id)}>
                <div className="content">{this.props.content}</div>
                <div className="tags">
                    {this.props.tags.map(tag =>
                        <SnippetTag key={tag} name={tag} editMode={false}/>
                    )}
                </div>
                <div className="toolbar">
                    <a className="delete-button tool danger" onClick={() => this.props.onDelete(this.props.id)}>Delete</a>
                </div>
                <div className="comment-bar">
                    <div className="comment"> // Click into to edit</div>
                </div>
            </div>
        );
    }
}

export default Snippet;
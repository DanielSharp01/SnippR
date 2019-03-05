import React, { Component } from "react";
import "../../sass/element.scss";

class Tag extends Component {
    render()
    {
        return (
            <div className="tag element">
                <div className="content">{this.props.content}</div>
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

export default Tag;
import React, { Component } from "react";
import "../sass/element.scss";

class Snippet extends Component {
    render()
    {
        return (
            <div className="snippet element">
                <div className="content">int randomInteger = rand() % max - min + 1) + min;</div>
                    <div className="tags">
                        <div className="tag">C</div>
                        <div className="tag">C++</div>
                    </div>
                    <div className="toolbar">
                        <a className="add-tag-button tool editable-visibility">Add tag</a>
                        <a className="delete-button tool danger">Delete</a>
                    </div>
                    <div className="comment-bar">
                        <div className="comment"> // Click into to edit</div>
                        <div className="comment editable-visibility">// Click on a tag to remove it</div>
                    </div>
            </div>
        );
    }
}

export default Snippet;
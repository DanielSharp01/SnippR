import React, { Component } from "react";

class SnippetTag extends Component {
    render()
    {
        return (
            <div className="tag">
                {this.props.editMode ? <input type="text" value={this.props.name} /> : this.props.name}
            </div>
        );
    }
}

export default SnippetTag;
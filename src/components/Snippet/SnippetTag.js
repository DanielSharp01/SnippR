import React, { Component } from "react";
import TextInput from "components/TextInput/TextInput"

class SnippetTag extends Component {
    
    componentDidMount()
    {
        if (this.props.editMode)
            this.refs.text.focus();
    }
    
    render()
    {
        return (
            <div className={"tag" + (this.props.editMode ? " new" : "")} onClick={this.props.onClick}>
                {this.props.editMode ? <TextInput ref="text" className="transparent-text"
                    value={this.props.name} onChange={this.props.onChange}/> : this.props.name}
            </div>
        );
    }
}

export default SnippetTag;
import React, { Component } from "react";
import ReactDOM from "react-dom";

class TextArea extends Component {
    state = {value: this.props.value, rows: 1};
    
    handleChange = (e) => {

        const oldRows = e.target.rows;
        e.target.rows = 1;
        const rows = ~~((e.target.scrollHeight-this.props.padding||0)/this.props.lineHeight);
        
        if (rows === oldRows) {
            e.target.rows = rows;
        }

        const value = e.target.value;
        this.setState({value, rows});
        this.props.onChange(value);
    }

    focus() {
        const domElement = ReactDOM.findDOMNode(this.refs.text);
        if (domElement) domElement.focus();
    }

    componentDidMount()
    {
        const domElement = ReactDOM.findDOMNode(this.refs.text);
        if (domElement)
        {
            const rows = ~~((domElement.scrollHeight-this.props.padding||0) / this.props.lineHeight);
            this.setState({ rows });
        }
    }

    render()
    {
        return (
            <textarea ref="text" rows={this.state.rows} className={this.props.className}
                value={this.state.value} onChange={this.handleChange}>
            </textarea>
        );
    }
}

export default TextArea;
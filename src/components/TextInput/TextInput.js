import React, { Component } from "react";
import ReactDOM from "react-dom";

class TextInput extends Component {
    state = {value: this.props.value};
    
    handleChange = (e) => {

        const value = e.target.value;
        const span = ReactDOM.findDOMNode(this.refs.measure);
        span.innerHTML = value;
        
        this.setState({value, width: this.props.padding || 0 + 2 + span.clientWidth});
        
        if (this.props.onChange)
            this.props.onChange(value);
    }

    focus() {
        const domElement = ReactDOM.findDOMNode(this.refs.text);
        if (domElement) domElement.focus();
    }

    componentDidMount() {
        const span = ReactDOM.findDOMNode(this.refs.measure);
        span.innerHTML = this.state.value;
        
        this.setState({width: this.props.padding || 0 + 2 + span.clientWidth});
    }

    render()
    {
        return (
            <React.Fragment>
                <input type="text" ref="text" style={{width: this.state.width}} className={this.props.className}
                    value={this.state.value} onChange={this.handleChange}>
                </input>
                <span ref="measure" className="measure-span">{this.state.value}</span>
            </React.Fragment>
        );
    }
}

export default TextInput;
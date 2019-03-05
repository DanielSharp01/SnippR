import React, { Component } from "react";
import Snippet from "components/Snippet/Snippet";
import MasonryPanel from "masonry/MasonryPanel"

class Snippets extends Component {
    constructor(prop) {
        super(prop);
        this.state = this.props.initialState;
    }

    handleDelete = id => {
        const snippets = this.state.snippets.filter(item => id !== item.id);
        this.setState({ snippets });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.snippets.map(snippet =>
                        <MasonryPanel key={snippet.id}>
                            <Snippet
                                id={snippet.id} content={snippet.content}
                                tags={snippet.tags} onDelete={this.handleDelete} />
                        </MasonryPanel>)}
            </React.Fragment>
        );
    }
}

export default Snippets;

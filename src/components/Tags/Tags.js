import React, { Component } from "react";
import Tag from "components/Tag/Tag";
import MasonryPanel from "masonry/MasonryPanel"

class Tags extends Component {
    constructor(prop) {
        super(prop);
        this.state = this.props.initialState;
    }

    handleDelete = id => {
        const tags = this.state.tags.filter(item => id !== item.id);
        this.setState({ tags });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.tags.map(tag =>
                        <MasonryPanel small key={tag.id}>
                            <Tag
                                id={tag.id} content={tag.content}
                                onDelete={this.handleDelete} />
                        </MasonryPanel>)}
            </React.Fragment>
        );
    }
}

export default Tags;

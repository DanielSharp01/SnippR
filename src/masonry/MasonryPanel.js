import React, { Component } from "react";

class MasonryPanel extends Component {
    render()
    {
        return (
            <div className="masonry-panel">
                <div className="masonry-content">{this.props.children}</div>
            </div>
        );
    }
}

export default MasonryPanel;
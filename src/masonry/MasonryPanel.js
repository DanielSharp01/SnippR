import React, { Component } from "react";

class MasonryPanel extends Component {
    render()
    {
        return (
            <div className={"masonry-panel" + (this.props.small && " small")}>
                <div className="masonry-content">{this.props.children}</div>
            </div>
        );
    }
}

export default MasonryPanel;
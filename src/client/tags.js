import Masonry from "masonry/Masonry.js";
import Tags from "components/Tags/Tags";
import React from "react";
import ReactDOM from "react-dom";

const masonry = new Masonry(document.querySelector(".masonry"));
masonry.elementWidth = 350;

import "styles/general.scss";
import "styles/element.scss";
import "styles/element-dialog.scss";

let initialState = {
    tags: [
        {id: 1, content: 'C' },
        {id: 2, content: 'C++' },
        {id: 3, content: 'C#' },
        {id: 4, content: 'JS' }
    ]
};

ReactDOM.render(<Tags initialState={initialState}/>, masonry.container);
masonry.layout();
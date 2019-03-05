import Masonry from "masonry/Masonry.js";
import Snippets from "components/Snippets/Snippets";
import React from "react";
import ReactDOM from "react-dom";

const masonry = new Masonry(document.querySelector(".masonry"));

import "styles/general.scss";
import "styles/element.scss";
import "styles/element-dialog.scss";

let initialState = {
    snippets: [
        {id: 1, content: 'int randomInteger = rand() % max - min + 1) + min;', tags: ['C', 'C++'] },
        {id: 2, content: 'Console.WriteLine("Hello World!");\nConsole.ReadLine();', tags: ['C#', 'Hello World'] }
    ]
};

ReactDOM.render(<Snippets initialState={initialState}/>, masonry.container);
masonry.layout();
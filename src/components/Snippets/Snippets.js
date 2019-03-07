import React, { Component } from "react";
import Snippet from "components/Snippet/Snippet";
import MasonryPanel from "masonry/MasonryPanel"
import SnippetDialog from "../SnippetDialog/SnippetDialog";

class Snippets extends Component {
    constructor(prop) {
        super(prop);
        this.state = this.props.initialState;
        this.state.editedSnippet = false;
    }

    snippetWithId(id) {
        return this.state.snippets.filter(item => id === item.id)[0];
    }
    
    handleDelete = id => {
        const snippets = this.state.snippets.filter(item => id !== item.id);
        this.setState({ snippets });
    };

    handleDialogDelete = id => {
        this.setState({editedSnippet: false});
        if (id !== false)
        {
            this.handleDelete(id);
        }
    }

    handleDialogClose = (id, snippet) => {
        let snippets;
        if (id === false)
        {
            snippet.id = this.state.snippets.length + 1;
            console.log("Snippets", this.state.snippets);
            snippets = [ ...this.state.snippets, snippet ];
        }
        else
        {
            snippets = [ ...this.state.snippets ]
            snippets[snippets.indexOf(this.snippetWithId(id))] = snippet;
        }
        this.setState({ snippets }); 
        this.setState({editedSnippet: false});
    }

    handleEdit = id => {
        this.setState({editedSnippet: this.snippetWithId(id)});
    }

    handleAdd = () => {
        this.setState({editedSnippet: {id: false, content: '', tags: [] }});
    }

    componentDidMount() {
        document.querySelector("#add-snippet-button").addEventListener("click", this.handleAdd);
    }

    componentDidUpdate() {
        this.props.masonry.layout();
    }

    componentWillUnmount() {
        document.querySelector("#add-snippet-button").removeEventListener("click", this.handleAdd);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.snippets.map(snippet =>
                        <MasonryPanel key={snippet.id}>
                            <Snippet
                                id={snippet.id} content={snippet.content}
                                tags={snippet.tags} onEdit={this.handleEdit} onDelete={this.handleDelete} />
                        </MasonryPanel>)}
                {
                    this.state.editedSnippet !== false &&
                    <SnippetDialog initialState={this.state.editedSnippet}
                        onClose={this.handleDialogClose}
                        onDelete={this.handleDialogDelete}/>
                }
            </React.Fragment>
        );
    }
}

export default Snippets;

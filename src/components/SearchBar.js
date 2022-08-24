import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault(); // prevent empty entries when hit enter
        this.props.onSubmit(this.state.term);  // pass state 'term' back to App.js
    }

    render() {
        return (
            <div className="ui search">
                <h3>Search Image: </h3>
                <form
                    className="ui icon input form"
                    onSubmit={this.onFormSubmit}
                >
                    <input
                        className="prompt"
                        type="text"
                        placeholder="i.e. goldendoodle"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    <i className="search icon"></i>
                </form>
            </div>
        );
    }
}

export default SearchBar;
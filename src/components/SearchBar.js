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
                <label>Image Search: </label><br />
                <form
                    className="ui icon input form"
                    onSubmit={this.onFormSubmit}
                >
                    <input
                        className="prompt"
                        type="text"
                        placeholder="i.e. car"
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
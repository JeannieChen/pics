import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '', num: '10'
    };

    onFormSubmit = (event) => {
        event.preventDefault(); // prevent empty entries when hit enter
        this.props.onSubmit(this.state.term, this.state.num);  // pass states back to App.js
    }

    render() {
        return (
            <div className="ui search">
                <h3>Search Image: </h3>
                <form className="ui action input form"
                    onSubmit={this.onFormSubmit} >

                    <div className="inline fields">
                        {/* Search box */}
                        <div className="ten wide field">
                            <input
                                className="prompt"
                                type="text"
                                placeholder="i.e. goldendoodle"
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })}
                            />
                            <button className="ui icon button">
                                <i className="search icon"></i>
                            </button>
                        </div>

                        {/* empty space */}
                        <div className="two wide field"></div>

                        {/* Num of pics */}
                        <div className="four wide field">
                            <label>Show </label>
                            <input
                                type="number"
                                min="1"
                                value={this.state.num}
                                onChange={(e) => this.setState({ num: e.target.value })}
                            />
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await Unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 10
            }
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} /> <br />

                <ImageList images={this.state.images} />

                <h4> Found {this.state.images.length} images </h4>
            </div>
        );
    }
}

export default App;
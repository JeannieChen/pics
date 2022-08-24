import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Footer from './Footer';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await Unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 20
            }
        });
        this.setState({ images: response.data.results });
    }


    render() {
        return (
            <div className='ui container' style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <br />
                <h4>Found {this.state.images.length} images</h4>
                <ImageList images={this.state.images} />

                <br />
                <Footer />
            </div>
        );
    }
}

export default App;
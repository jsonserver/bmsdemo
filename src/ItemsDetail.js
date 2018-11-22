import React, { Component } from 'react';
import Loader from './Loader';

class ItemsDetail extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ item: json }));
    }

    render() {
        const { item } = this.state;
        console.log(item);
        return (
            <div>
                {item === null && <Loader />}
                {
                    item !== null &&
                    <div>
                        <p><b>{item.name}</b></p>
                        <p>Rating {item.rating.average}</p>
                        <p>Episodes {item._embedded.episodes.length}</p>
                        <p><img src={item.image.medium} alt="Show" /></p>
                    </div>

                }
            </div>
        )
    }
}

export default ItemsDetail;
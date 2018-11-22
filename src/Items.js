import React, { Component } from 'react';
import ItemsList from './ItemsList'
import Loader from './Loader'

class Items extends Component {
    state = {
        items: [],
        itemsName: '',
        isFetching: false
    }

    componentDidMount() {
        /*const items = ["Vikings", "Game of Thrones"];
        setTimeout(() => {
          this.setState({ items });
        }, 2000);*/
    }

    onItemsInputChange = e => {
        this.setState({itemsName: e.target.value, isFetching: true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ items: json, isFetching: false}));
        //console.log(e.target.value);
    }

    render() {
        const { items, itemsName, isFetching } = this.state;
        return (
            <div>
                <p>Number of items: {this.state.items.length}</p>
                <div>
                    <input value={itemsName} type="text" onChange={this.onItemsInputChange} />
                </div>
                {
                    !isFetching && items.length === 0 && itemsName.trim() === '' && <p>Filter criteria missing</p>
                }
                {
                    !isFetching && items.length === 0 && itemsName.trim() !== '' && <p>No results match the filter criteria</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    !isFetching && <ItemsList list={this.state.items} />
                }
            </div>
        )
    };
}

export default Items;
import React from 'react';
import './ItemsList';
import { Link } from 'react-router-dom';

const ItemsListItem = ({ series }) => {
    return (
        <li key={series.show.id}>
            <Link to={`/items/${series.show.id}`}>
                {series.show.name}
            </Link>
        </li>
    );
}

const ItemsList = (props) => {
    return (
        <div>
            <ul className="items-list">
                {
                    props.list.map(series => (
                        <ItemsListItem series={series} key={series.show.id} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemsList;
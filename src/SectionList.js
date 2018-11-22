import React, { Component } from 'react'

class SectionList extends Component {
    state = {
        data: [],
        searchString: ''
    }

    constructor() {
        super();
        this.getData();
    }

    getData = () => {
        this.setState({ data: ["AA", "BB", "CC"] });
    }

    render() {
        return (
            <div>
                <h1>Information</h1>
            </div>
        );
    }
}

export default SectionList;
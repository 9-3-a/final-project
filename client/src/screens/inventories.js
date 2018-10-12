import React from 'react';
import axios from 'axios';

class Inventories extends React.Component {
    state = {
        wines: []
    }

    componentDidMount() {
        axios.get('/wines')
            .then((res) => {
                this.setState({wines:res.data})
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <span>
                {this.state.wines.map(wine => {
                    return (
                        <div key={wine._id} className="wine">
                            <h3>{wine.name}</h3>
                            <div className="wine-type">{wine.type}</div>
                            <img src={"/images/" + wine.image} alt={wine.name + ' Image'}/>
                            <a href={"/review/" + wine._id}>CHECK OUT OUR REVIEWS</a>
                        </div>
                    );
                })}
            </span>
        )
    }
}

export default Inventories;

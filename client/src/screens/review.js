import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        console.log(this.props.match.params.wineId);
        axios.get('/review/' + this.props.match.params.wineId)
            .then((res) => {
                this.setState({reviews:res.data, wineId: this.props.match.params.wineId})
            })
            .catch((err) => console.log(err));
    }

    reviewUpdated = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitReview = e => {
        e.preventDefault();

        axios.post('/review', {
                name: this.state.username,
                review: this.state.review,
                rating: this.state.rating,
                wine: this.state.wineId
            })
            .then((res) => {
                if(res.data.success) {
                    window.location.reload();
                }
               
                console.log('No Success');
            })
            .catch((err) => console.log(err));

        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitReview}>
                    <input name="username" type="text" onChange={this.reviewUpdated} />
                    <input name="rating" type="number" onChange={this.reviewUpdated} />
                    <textarea name="review" onChange={this.reviewUpdated}></textarea>
                    <input type="submit" value="What'd Ya Think?" />
                </form>
                <span>
                    {this.state.reviews.map(rev => {
                        return (
                            <div key={rev._id} className="review">
                                <h3>{rev.name}</h3>
                                <p className="rating">{rev.rating}</p>
                                <p>{rev.review}</p>              
                            </div>
                        );
                    })}
                </span>
            </div>
        )
    }
}

export default Reviews;

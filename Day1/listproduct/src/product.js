import React from 'react';
import './css/product.css'
class Product extends React.Component {
    constructor(props) {
         super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
        }
        
    handleUpVote() {
        this.props.onVote(this.props.id);
        console.log(this.props.id);
    }
    render() {
        <div className='middle aligned content'>  
        </div>
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} alt="avatar" />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <p>Votes: {this.props.votes}</p>
                        <button onClick={this.handleUpVote}>Votes</button>
                        <a href={this.props.url}> {this.props.title}</a>
                        <p>{this.props.description}</p>
                        <div className="user">
                            <span>Submit by:</span><img className="image" src={this.props.userImage} alt="avatar" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default Product;

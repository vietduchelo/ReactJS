import React from 'react';
import Product from './product';
import './css/product.css';
class ProductList extends React.Component {
     PR = [];
    constructor(props) {
        super(props);
        this.state = { products: [], };
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    componentDidMount() {
        this.setState({ products: products });
    }

    // handleProductUpVote(productId) {
    //     console.log(productId + ' was upvoted.');
    // }
    handleProductUpVote(productId) {
     const  nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product,
                    { votes: product.votes + 1, });
            }
            else { return product; }

        });
        
        this.setState({ products: nextProducts, });


        // const products = this.state.products;
        // products.forEach((product) => {
        //     if (product.id === productId) { product.votes = product.votes + 1; }
        // });
        // this.setState({ products: products, });

    }
    render() {
        const producta = this.state.products.sort((a, b) => (b.votes - a.votes));
        const ProductComonent = producta.map((product) => (
         
            <Product
                key={'product: ' + product.id}
                id={product.id}
                votes={product.votes}
                title={product.title}
                description={product.description}
                url={product.url}
                productImageUrl={product.productImageUrl}
                userImage={product.userImage}
                onVote={this.handleProductUpVote}
            />
        ))
        return (
            <div className="hihi">
                {ProductComonent}
            </div>
        );

    }
}
export default ProductList;
const products = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: 'ahihi',
        productImageUrl: 'images/image.png',
        votes: 10,
        userImage: 'images/img.jpg'
    },
    {
        id: 2,
        title: 'Hello Khoa',
        description: 'On-demand sand castle construction expertise.',
        url: 'ahihi',
        productImageUrl: "images/image.png",
        votes: 50,
        userImage: 'images/avatar.jpg'

    },
    {
        id: 3,
        title: 'Hi Khoa',
        description: 'On-demand sand castle construction expertise.',
        url: 'ahihi',
        productImageUrl: "images/image.png",
        votes: 8,
        userImage: 'images/avatar.jpg'


    },
    {
        id: 10,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: 'ahihi',
        productImageUrl: 'images/logo.svg',
        votes: 10,
        userImage: 'images/img.jpg'
    }
]    
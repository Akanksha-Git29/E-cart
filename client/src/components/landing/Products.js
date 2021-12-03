import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getProducts} from '../../actions/productAction'

class Products extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        this.props.getProducts()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.products.products){
            const products = nextProps.products.products
            this.setState({products})
            console.log(products)
        }
        
    }

    render() {
        const {products} = this.state
        return (
            <div>
                <div className="row">
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> ({
    products : state.products
})

export default connect(mapStateToProps,{getProducts}) (Products);
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getProducts} from '../../actions/productAction'
import { Card } from 'antd'

const { Meta } = Card;
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

    productDetails = (product)=>{
        return(
            <ul>
                <li>INR:{product.price}</li>
                <li>  Quntity:{product.quantity}</li>
            </ul>
        )
    }

    render() {
        const {products} = this.state
        console.log(products)
        return (
            <div className='container'>
                <div className="row">
                    {products.map((product,index)=>(
                        <Card key={index}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title={product.name}
                            description={this.productDetails(product)} />
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> ({
    products : state.products
})

export default connect(mapStateToProps,{getProducts}) (Products);
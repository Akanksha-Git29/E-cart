import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { getProduct } from '../../actions/productAction';
import { Spin, Space, Button, Rate, Modal } from 'antd';
import NavBar from '../general/NavBAr'

export const withRouter = (Component) => { //works only for react16-17 //hooks
    const Wrapper = (props) => {
        let { id } = useParams();
        const history = useNavigate(); //userNavigator ~ useHistory ~withRoutes
        const location = useLocation();
        return (
            <Component
                id={id}
                {...props}
                history={history}
                {...props}
                location={location}
                {...props}
            />
        );
    };

    return Wrapper;
};

class ProductDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: null,
            visible: false
        }
    }

    componentDidMount() {
        const pid = this.props.id
        this.props.getProduct(pid)
        console.log(pid)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps && nextProps.product) {
            const product = nextProps.product
            this.setState({ product })
        }
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = () => {
        this.setState({
            visible: true
        });
    };

    handleCancel = () => {
        this.setState({
            visible: true
        });
    };

    registerModal = (product) => {
        return (
            <Modal title="Basic Modal" >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        )
    }

    render() {
        console.log(this.state.product)
        const { product } = this.state
        return (
            <Fragment>
                <NavBar />
                <div className='container'>
                    {product ? (
                        <Fragment>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/eshop.jpg"} alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <h1 style={{ margin: "0" }} >{product.name}</h1>
                                    <p 
                                        className="lead" style={{ margin: "0" }}>{product.description} 
                                    </p>
                                    <p 
                                        className='lead' style={{ margin: "0" }}>Features:
                                    </p>
                                    <ul style={{ marginLeft: "5%", marginTop: "0" }} >
                                        {product.features.map((feature, index) => {
                                            <li key={index}>{feature}</li>
                                        })}
                                    </ul>
                                    <Rate disabled allowHalf defaultValue={product.rating} style={{ margin: "0" }} />
                                    <p className="lead" style={{ margin: "0" }}>
                                        Quantity: {product.quantity} 
                                    </p>
                                    <h2>INR: {product.price} </h2>
                                    <Button type='primary' style={{ marginBottom: "3rem" }} onClick={this.showModal} >
                                        {" "} Add To Cart
                                    </Button>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <h1>Products Details</h1>
                                <p className="lead">
                                    <b>{product.detail}</b>
                                </p>
                                <p className='lead' style={{ margin: "0" }}>Main Features:</p>
                                <ul style={{ marginLeft: "5%", marginTop: "0" }} >
                                    {product.features.map((feature, index) => {
                                        <li key={index}>{feature}</li>
                                    })}
                                </ul>
                            </div>
                        </Fragment>
                    )
                        :
                        (
                            <Space size="middle">
                                <Spin size="large" />
                            </Space>
                        )}
                </div>
                {product && this.registerModal(product)}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.products.product,
});

export default connect(mapStateToProps, { getProduct })(withRouter(ProductDetails))

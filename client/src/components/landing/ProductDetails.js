import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

export const order = () => { //works only for react16-17 //hooks
    const Wrapper = (props) => {
        const match = useParams()
        return (
            <Component
                match={match.id}
                {...props}
            />
        );
    };

    return Wrapper;
};

class ProductDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            product: null
        }
    }

    componentDidMount(){
        console.log(this.match)
    }

    render() {
        return (
            <div>
                Testing
            </div>
        )
    }
}

export default ProductDetails

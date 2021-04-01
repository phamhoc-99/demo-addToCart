import React, { Component } from 'react';

import {Container,Row,Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

                          //npm install axios
import axios from 'axios';//giống như fetch api

import {CartContext} from '../contexts/Cart';

class Products extends Component{
    constructor(props){
        super(props);

        this.state={
            products:[]
        };
    }

componentDidMount(){
    const callApi = async () => {
        const res = await axios.get("https://x3olm.sse.codesandbox.io/products");
        this.setState({
            products: res.data,
        })
    }
    callApi();
    
}

    render(){
        const {products}=this.state;
        console.log(products);
        return(
     <Container>
         <h2>Products</h2>
      <Row>
          {products.map(product=>(
    <Col sm="4">
        <Card>                              {/*tìm trong phần component của reactstrap */}
           <CardImg top width="100%" 
           src={product.imageUrl} />
           <CardBody>
             <CardTitle tag="h5">{product.name}</CardTitle>
             <CardText>{product.description}</CardText>
     <CartContext.Consumer>                                   
         {({addToCart})=>(
         <Button onClick={()=>addToCart(product)}>
             Add to cart
             </Button>)}
     </CartContext.Consumer>        
           </CardBody>
        </Card>
    </Col>
          ))}
      </Row>
      </Container>);    
    }
}

export default Products;
//https://codesandbox.io/s/small-cloud-x3olm?file=/src/index.js   :code back end
//https://x3olm.sse.codesandbox.io/products                       :fake api
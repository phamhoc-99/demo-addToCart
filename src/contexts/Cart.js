//context api
//provider:dữ liệu :app(props:cartItems,method:addTocart)
//consumer:hiển thị:topmenu(props:cartItems) và products(method:addTocart)
import React,{Component} from 'react';
 
export const CartContext=React.createContext();                    

export class CartProvider extends Component{
constructor(props){
    super(props);

    this.state={cartItems:[]};
    this.addToCart=this.addToCart.bind(this);
}

addToCart(product){
    console.log('adding to cart',product)
    this.setState({
cartItems:this.state.cartItems.concat(product)
    });
}

render(){
    return <CartContext.Provider value={{
        cartItems:this.state.cartItems,
        addToCart:this.addToCart
        }}>
        {this.props.children}
    </CartContext.Provider>;
}

}
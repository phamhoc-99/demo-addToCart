import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import {CartProvider} from './contexts/Cart';
 <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

//npm install react-router                                     cài đặt
//npm install react-router-dom --save

const Index=()=><h2>Home</h2>  //khai báo component

function App(){
  return (
    <CartProvider>                                                
    <Router>
      <div className="App">
        <TopMenu/>
<Route path="/"          exact component={Index}           />   {/* gán    */}
<Route path="/products/" exact component={Products}        />   {/*exact:vào chính xác tuyệt đối đường dẫn,chứ /about/lsdhlds là ko được  */}
      </div>
    </Router>
    </CartProvider>
  );
}

const rootElement=document.getElementById('root');
ReactDOM.render(<App/>,rootElement);



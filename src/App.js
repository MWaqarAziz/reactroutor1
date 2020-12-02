import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Header} from './Components/Header';
import {Home} from './Components/Home';
import {Product} from './Components/Product';
import {ProductDetails} from './Components/ProductDetails';
import {NotFound} from './Components/NotFound';
import {ProductIndex} from './Components/ProductIndex';
function App() {
  return (
    <div >
    <Router>
    <Header/>
     <Routes>
       <Route path='/'  element={<Home/>}/>
       <Route path='products' element={<Product/>}>
       <Route path='/' element={<ProductIndex/>}/>
          <Route path=':productId' element={<ProductDetails />} />
       </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </Router>
     
    </div>
  );
}

export default App;

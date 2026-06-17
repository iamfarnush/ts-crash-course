import React from 'react';
import Product from './components/Product';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';

function App() {

const {loading, error, products} = useProducts()

  return (
    <div className="max-w-[400px] m-auto">

    {loading && 
          <Loader />
    }
    {error &&
     <Error />
    }
      {products.map(product => (
        <Product key={product.id} product={product}/>
      ))}

<Modal title='Create new product'>
  <CreateProduct />
</Modal>
    </div>
  );
}

export default App;

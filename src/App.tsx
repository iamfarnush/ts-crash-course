import React, { useState } from 'react';
import Product from './components/Product';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';

function App() {

const {loading, error, products} = useProducts()

const [modal, setModal] = useState(true)

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

    {modal && 
    <Modal title='Create new product'>
      <CreateProduct onCreate={(() => setModal(false))}/>
    </Modal>
    }
    </div>
  );
}

export default App;

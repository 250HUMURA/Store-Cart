import {Row, Col} from 'react-bootstrap'
import {productsArray} from '../productsStore'
import ProductCart from '../Components/ProductCart';

function Store() {
  return (
    <>
    <h1 align='center' className='p-3'>Welcome to the Store</h1>
    <Row xs={1} md={3} className=''>
        {productsArray.map((product, idx) => (
        <Col align='center'>
            <ProductCart product={product}/>
         </Col>

        ))}
     
     
    </Row>
    </>
  )
}

export default  Store;
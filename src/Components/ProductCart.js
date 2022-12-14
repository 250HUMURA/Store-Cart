import {Card, Button, Form, Row, Col} from 'react-bootstrap'

function ProductCart({product}) { 
  return (
    <Card>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant='primary'>Add to Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCart
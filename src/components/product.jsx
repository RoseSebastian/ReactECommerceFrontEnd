/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'

function Product(props) {
  return (
    <Card style={{ marginBottom: '25px' }}>
      <Card.Img className="productImg" variant="top" src={props.productData.image} />
      <Card.Body>
        <Link to={`/product-details/${props.productData.id}`}>
        <Card.Title className="productTitle">{props.productData.title}</Card.Title>
        </Link>
        
        <Card.Subtitle className="productPrice">${props.productData.price}</Card.Subtitle>
        <Card.Text className="productDesc">{props.productData.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

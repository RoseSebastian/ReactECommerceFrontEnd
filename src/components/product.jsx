/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";

function Product(props) {
  return (
    <Card style={{ marginBottom: '25px' }}>
      <Card.Img className="productImg" variant="top" src={props.productData.image} />
      <Card.Body>
        <Card.Title className="productTitle">{props.productData.title}</Card.Title>
        <Card.Subtitle className="productPrice">${props.productData.price}</Card.Subtitle>
        <Card.Text className="productDesc">{props.productData.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

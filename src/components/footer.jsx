import Card from "react-bootstrap/Card";
import "../assets/css/style.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <>
      <Card className="footer bom">
        <Container>
          <Card.Body>
            <Card.Title>&copy; 2023 | Copyright</Card.Title>
            <Card.Text>Created by William Weile Feng</Card.Text>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
}
export default Footer;

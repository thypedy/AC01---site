import NavbarD from "../components/navbar";
import Footer from "../components/footer";

import Intro1 from "../assets/imgs/construction-scaffolding.jpg";
import Intro2 from "../assets/imgs/measure-twice-cut-once.jpg";
import Intro3 from "../assets/imgs/construction-tools-flatlay.jpg";

import Cimento from "../assets/imgs/cimento.webp";
import Tabua from "../assets/imgs/tabua.webp";
import Telha from "../assets/imgs/telha.webp";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const produtos = [
  {
    nome: "Cimento Todas As Obras Votoran 50kg",
    preco: "R$ 29,90",
    img: Cimento,
  },
  {
    nome: "Tabua Pinus 30 cm com 3 Metros",
    preco: "R$ 25,00",
    img: Tabua,
  },
  {
    nome: "Telha Confibra Ondulada 244x110cm 5mm Telhado",
    preco: "R$ 54,00",
    img: Telha,
  },
];
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavbarD />

      <section>
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro1} alt="First slide" />
            <Carousel.Caption>
              <h3>Confira as promoções</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro3} alt="Second slide" />

            <Carousel.Caption>
              <h3>Confira as promoções</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Confira as promoções</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="Produtos row ha">
          {produtos.map(({ nome, preco, img }) => (
            <Card style={{ width: "18rem" }} key={nome}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Text className="e">{nome}</Card.Text>
                <Card.Title className="f">{preco}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;

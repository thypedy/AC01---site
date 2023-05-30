import "bootstrap/dist/css/bootstrap.min.css";
import NavbarD from "../components/navbar";
import Footer from "../components/footer";

function Sobre() {
  return (
    <>
      <NavbarD />
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
          No "MateriaisMarquinhos", a satisfação do cliente é a nossa prioridade.
          Por isso, nos esforçamos para oferecer preços competitivos, promoções
          especiais e entrega rápida. Valorizamos o relacionamento de longo
          prazo com nossos clientes e nos esforçamos para construir parcerias
          baseadas na confiança e no respeito mútuo. Seja você um empreiteiro
          experiente ou um proprietário fazendo pequenas reformas, o
          "MateriaisMarquinhos" é o lugar ideal para suas necessidades de materiais
          de construção. Venha nos visitar hoje mesmo e descubra por que somos a
          escolha confiável da comunidade quando se trata de construir com
          qualidade e eficiência. Estamos ansiosos para ajudar você a
          transformar suas ideias em realidade.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Sobre;

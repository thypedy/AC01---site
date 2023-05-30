import NavbarD from "../components/navbar"
import Footer from "../components/footer"
import insta from "../assets/imgs/instagramlogo.svg"
import email from "../assets/imgs/email.svg"
import tiktok from "../assets/imgs/tiktok.svg"

import "../assets/css/style.css"

function Contato(){
    return(
        <>
        <NavbarD/>
        <div className="vh">
            <form className="contato">
                <h1>Receba Notificados</h1>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <button>Enviar</button>
            </form>
            <div className="info">
                <ul>
                    <li><img src={email} alt="" />MaterialMarquinh@s.com</li>
                    <li><img src={tiktok} alt="" />MaterialMarquinhos</li>
                </ul>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contato

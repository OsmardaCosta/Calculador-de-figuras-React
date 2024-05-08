import { Link } from "react-router-dom";
import quadrado from '../IMG/quadrado.png'
import triangulo from '../IMG/triangulo.png'
import circulo from '../IMG/circulo.png' 
import trapezio from '../IMG/trapezio.png' 

const Header = () => {
    return ( 
        <>
        <header>
            <nav>
                <ul>
                    <li><a href="#"><Link to='/Quadrado'><img src={quadrado} alt="quadrado" /></Link></a></li>
                    <li><a href="#"><Link to='/Produtos'><img src={triangulo} alt="triangulo" /></Link> </a></li>
                    <li><a href="#"><Link to='/Circulo'><img src={circulo} alt="circulo" /></Link></a></li>
                    <li><a href="#"><Link to='/Trapezio'><img src={trapezio} alt="trapezio" /></Link></a></li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Header;
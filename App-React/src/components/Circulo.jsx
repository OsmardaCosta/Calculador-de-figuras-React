import { useState } from "react"

const Circulo = () => {

    const [raio, setraio] = useState()
    const [area, setarea] = useState()

    const calc = (e) => {
        setraio(Number(e.target.value))
    }

    const calcular = (event) => {
        event.preventDefault()
        setarea(3.14*raio*raio)
    }

    return ( 
        <div className="container">
            <div>
                <h1 className="h1prod">Circulo</h1>
                <p><label htmlFor="cirulo">Digite o valor do raio:</label></p>
                <input type="number" id="circulo" onChange={calc}/>
                <p><button onClick={calcular}>Calcular</button></p>
                <h3>{area > 0 ? `A área do círculo é: ${area} metros quadrados`: ''}</h3>
            </div>
        </div>
     );
}
 
export default Circulo;
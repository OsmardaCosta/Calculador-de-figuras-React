import { useState } from "react";

const Quadrado = () => {

    const [input,setinput] = useState()
    const [area,setarea] = useState()

    const calc = (e) =>{
        setinput(Number(e.target.value))
    }

    const calcular = (event) =>{
        event.preventDefault()
        setarea(input*input)
    }

    return (
        <div className="container">
            <div>
                <h1 className="h1prod">Quadrado</h1>
                <p><label htmlFor="quadrado">Comprimento do quadrado:</label></p>
                <input type="number" id="quadrado" required onChange={calc}/>
                <p><button onClick={calcular}>Calcular</button></p>
                <h3 style={{textAlign: 'center'}}>{area > 0 ?` A área do quadrado é: ${area} metros quadrados` : ''}</h3>
            </div>
        </div>
    );
}

export default Quadrado
import { useState } from "react";

const Triangulo = () => {

    const [valorbase, setvalorbase] = useState()
    const [valoraltura, setvaloraltura] = useState()
    const [area, setarea] = useState()

    const calcbase = (e) => {
        setvalorbase(Number(e.target.value))
    }

    const calcalt = (e) =>{
        setvaloraltura(Number(e.target.value))
    }

    const calcular = (event) => {
        event.preventDefault()
        setarea((valorbase*valoraltura)/2)
    }

    return (
        <>
        <div className="container">
            <div>
                <h1 className="h1prod">Triangulo</h1>
                <p><label htmlFor="base">Valor da base:</label></p>
                <input style={{marginBottom: '10px'}} type="number" id="base" required onChange={calcbase}/>
                <p><label htmlFor="altura">Valor da altura:</label></p>
                <input type="number" id="altura" required onChange={calcalt}/>
                <p><button onClick={calcular}>Calcular</button></p>
                <h3>{ area > 0 ? `A área do triangulo é: ${Number(area)} metros quadrados` : ''}</h3>
            </div>
        </div> 
        
        </>
    );
}

export default Triangulo;
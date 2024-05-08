import { useState } from "react";

const Trapezio = () => {

    const [Basemaior, setBasemaior] = useState();
    const [Basemenor, setBasemenor] = useState();
    const [altura, setAltura] = useState();
    const [area, setArea] = useState();

    const Basemaiorfunc = (e) => {
        setBasemaior(Number(e.target.value));
    }

    const Basemenorfunc = (e) => {
        setBasemenor(Number(e.target.value));
    }

    const alturafunc = (e) => {
        setAltura(Number(e.target.value));
    }

    const Calcular = () => {
        //const calculatedArea = ((Basemaior + Basemenor) * altura) / 2;
        setArea((Basemaior + Basemenor) * altura/ 2) ;
    }

    return ( 
        <div className="container">
            <div>
                <h1>Trapezio</h1>
                <p><label htmlFor="Bm">Base maior</label></p>
                <input className="trapinput" type="number" id="Bm" onChange={Basemaiorfunc} value={Basemaior}/>
                
                <p><label htmlFor="bm">Base menor:</label></p>
                <input className="trapinput" type="number" id="bm" onChange={Basemenorfunc} value={Basemenor}/>
                
                <p><label htmlFor="altura">Altura:</label></p>
                <input className="trapinput" type="number" id="altura" onChange={alturafunc} value={altura}/>
                <p><button onClick={Calcular}>Calcular</button></p>
                <h3>{area > 0 ? `A área do Trapézio é: ${area} metros quadrados` : ''}</h3>
            </div>
        </div>
     );
}

export default Trapezio;
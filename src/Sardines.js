import { useState } from "react";
import anchovyImg from "./sardine.jpeg";

const Sardines = () => {
    const [ sardine, setSardine ] = useState(false);

    const handleClick = () => {
        setSardine(true);
    };

    return (
        <>
            <button onClick={handleClick}>Get Sardine</button>
            <hr></hr>
            <div>
                { sardine === true ? (
                    <img src={anchovyImg} alt="sardine" style={{maxHeight: "100px"}}></img>
                ) : null }
            </div>
        </>
    )
}

export default Sardines;
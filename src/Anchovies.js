import { useState } from "react";
import anchovyImg from "./anchovy.png";

const Anchovies = () => {
    const [ anchovy, setAnchovy ] = useState(false);

    const handleClick = () => {
        setAnchovy(true);
    };

    return (
        <>
            <button onClick={handleClick}>Get Anchovy</button>
            <hr></hr>
            <div>
                { anchovy === true ? (
                    <img src={anchovyImg} alt="anchovy" style={{maxHeight: "100px"}}></img>
                ) : null }
            </div>
        </>
    )
}

export default Anchovies;
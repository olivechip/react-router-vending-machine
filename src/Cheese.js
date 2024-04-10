import { useState } from "react";
import cheddarImg from "./cheddar.jpg";
import parmesanImg from "./parmesan.jpg";
import brieImg from "./brie.jpg";
 
const Cheese = () => {
    const [ cheeseName, setCheeseName ] = useState("");
    const [ cheeseImg, setCheeseImg ] = useState("");

    const handleClick = (cheese) => {
        setCheeseName(cheese);
        
        switch (cheese){
            case "cheddar":
                setCheeseImg(cheddarImg);
                break;
            case "parmesan":
                setCheeseImg(parmesanImg);
                break;
            case "brie":
                setCheeseImg(brieImg);
                break;
            default:
                setCheeseImg("");
        }
    };

    return (
        <>
            <p>Choose your Cheese</p>
            <button onClick={() => handleClick("cheddar")}>Cheddar</button>
            <button onClick={() => handleClick("parmesan")}>Parmesan</button>
            <button onClick={() => handleClick("brie")}>Brie</button>
            <hr></hr>
            <div>
                { cheeseName === "cheddar" || cheeseName === "parmesan" || cheeseName === "brie" ? (
                    <img src={cheeseImg} alt={cheeseName} style={{maxHeight: "200px"}} />
                ) : null }
            </div>
        </>
    )
}

export default Cheese;
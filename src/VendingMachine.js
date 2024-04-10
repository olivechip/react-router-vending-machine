import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Sardines from "./Sardines";
import Anchovies from "./Anchovies";
import Cheese from "./Cheese";

const VendingMachine = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sardines" element={<Sardines />} />
                    <Route path="/anchovies" element={<Anchovies />} />
                    <Route path="/cheese" element={<Cheese />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default VendingMachine;
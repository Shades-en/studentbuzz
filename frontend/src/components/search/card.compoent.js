import { Outlet } from "react-router-dom";
import "./search.css"

const Cards = () => {
    return ( 
        <>  
        <div className="clubs_card_container">
            <div className="card">
                <p>Google Developers Student Club</p>
            </div>
            <div className="card">
                <p>CodeRIT</p>
            </div>
            <div className="card">
                <p>Editha</p>
            </div>
            <div className="card">
                <p>EDC</p>
            </div>
            <div className="card">
                <p>Finance Club</p>
            </div>
            <div className="card">
                <p>Velocita</p>
            </div>
        </div>
            <Outlet />
        </>
     );
}
 
export default Cards;
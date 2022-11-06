import { Link, Outlet } from "react-router-dom";
import "./search.css"

const Cards = () => {

    const clubLink = (goTO) => {
        <Link to={goTO}></Link>
    }

    return ( 
        <>  
        <div className="clubs_card_container">
            <div className="card" onClick={() => clubLink()}>
                <p>Google Developers Student Club</p>
            </div>
            <div className="card" onClick={() => clubLink()}>
                <p>CodeRIT</p>
            </div>
            <div className="card" onClick={() => clubLink()}>
                <p>Editha</p>
            </div>
            <div className="card" onClick={() => clubLink()}>
                <p>EDC</p>
            </div>
            <div className="card" onClick={() => clubLink()}>
                <p>Finance Club</p>
            </div>
            <div className="card" onClick={clubLink}>
                <p>Velocita</p>
            </div>
        </div>
            <Outlet />
        </>
     );
}
 
export default Cards;
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
export function Carosello(){
    
    return (
    <div className="carosello-container">
        <div className="carosello-display">
            <p>non disponibile</p>
        </div>
        <div className="carosello-bottom d-flex">
            <button className="ml-1">{"<<"}</button>
            <p className="ml-0">1/3</p>
            <button className="ml-0">{">>"}</button>
        </div>
    </div>)
}
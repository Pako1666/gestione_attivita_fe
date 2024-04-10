import { HeaderModel } from "./model/header";
import "./style.css"
export function Header(props:HeaderModel){
    return (
        <header className="header">
           <p>{props.text}</p> 
        </header>
    )
}
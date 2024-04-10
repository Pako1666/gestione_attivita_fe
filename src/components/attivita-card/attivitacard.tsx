import { AttivitaCardModel } from "./model/attivita-card-model";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export function AttivitaCard({alias,id,lavorata,attivitaPadre}:AttivitaCardModel){
    return (
        /*<div className="att-card-container ">
            <div className="att-card-header">Attività #{id}</div>
            <div className="attivita-card">
                
                <p><b>Nome:</b> {alias}</p>
                <p><b>Status:</b> {lavorata?"SI":"NO"}</p>
                {
                    attivitaPadre&&<p><b>Dipende da:</b> {attivitaPadre}</p>
                }
                
            </div>
            
        </div>*/
        <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="att-card-container">
        <div className="att-card-header">Attività #{id}</div>
        <div className="attivita-card">
          <p><b>Nome:</b> {alias}</p>
          <p><b>Status:</b> {lavorata ? "SI" : "NO"}</p>
          {attivitaPadre && <p><b>Dipende da:</b> {attivitaPadre}</p>}
        </div>
      </div>
    </div>
  </div>
</div>

        
    )
}
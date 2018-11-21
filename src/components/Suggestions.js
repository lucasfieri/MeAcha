import React from 'react'
import { Link } from "@reach/router";
import '../css/suggestions.css';

const Suggestions = (props) => {
  const options = props.results.slice(0,7).map(resultado => (
    <li key={resultado.ID_PRODUTOS} className="item-sugg">
      <Link to={"/Results/"+ props.supermarketSelected + "?produto="+ resultado.NOME_PRODUTO} className="link-item">
        {resultado.NOME_PRODUTO}
      </Link>
    </li>
  ))
  
  return <div className="sugg-container"><ul className="sugg-list">{options}</ul></div>

}



export default Suggestions
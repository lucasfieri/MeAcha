import React from 'react'
import { Link } from "@reach/router";
import '../css/suggestions.css';

const Suggestions = (props) => {
  const options = props.results.slice(0, 7).map(resultado => (
    <li key={resultado.ID_PRODUTOS} className="item-sugg" onClick={() => {
      window.localStorage.setItem('id', resultado.ID_PRODUTOS)
    }} >
      <Link to={"/Shell/Splash/Search/" + props.supermarketChecked + "/" + resultado.NOME_PARAMETRIZADO} className="link-item">
        {resultado.NOME_PRODUTO}
      </Link>
      <div className="none">{resultado.ID_PRODUTOS}</div>
    </li>
  ))
  return <div className="sugg-container"><ul className="sugg-list">{options}</ul></div>
}

export default Suggestions
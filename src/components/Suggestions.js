import React from 'react'
import '../css/suggestions.css';

const Suggestions = (props) => {
  const options = props.results.slice(0,7).map(resultado => (
    <li key={resultado.ID_PRODUTOS} className="item-sugg">
      {resultado.NOME_PRODUTO}
    </li>
  ))
  return <div className="sugg-container"><ul className="sugg-list">{options}</ul></div>
}

export default Suggestions
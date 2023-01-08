import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

function Card(props) {
  const {
    name, description, src, imgsrc
  } = props;

  return (
    <Link to={`${src}`} class="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="trim">
        <img src={`${process.env.PUBLIC_URL}img/projects/${imgsrc}`} alt={`${name} картинка`} />
      </div>
    </Link>
  );
}
export default Card;

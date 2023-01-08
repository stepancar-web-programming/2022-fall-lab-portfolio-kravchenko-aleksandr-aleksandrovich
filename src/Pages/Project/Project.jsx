import React from 'react';
import './Project.css';

function Project(props) {
  const { MyProject } = props;
  if (MyProject != null) {
    return (
      <div className="project">
        <MyProject />
      </div>
    );
  }

  return (
    <div className="project">
      <h1>Comming soon</h1>
      <h3>Сейчас работает только BouncyBall</h3>
    </div>
  );
}

export default Project;

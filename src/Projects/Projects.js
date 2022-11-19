import React from 'react';
import './Projects.css'
import Card from './Card/Card';

function Projects() {
    return (
        <div class="projects">
            <h2>Мои Проекты</h2>
            <div class="cards">
                <Card name="Flocking" description="Симуляция координированного полёта огромных стай птиц" src="/flocking" imgsrc="flocking.jpg" />
                <Card name="Silovie_Linii" description="Графическое средство для представления векторных полей" src="/silovielinii" imgsrc="silovielinii.jpg" />
                <Card name="Bouncy Ball" description="Другие не успел переписать на js" src="/bouncy" imgsrc="cool-pic.png" />
            </div>
        </div>
    );
}

export default Projects;
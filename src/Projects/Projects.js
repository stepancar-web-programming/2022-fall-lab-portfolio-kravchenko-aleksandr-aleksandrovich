import './Projects.css'
import Card from './Card/Card';

function Projects(){
    return(
        <div class="projects">
            <h2>Мои Проекты</h2>
            <div class="cards">
                <Card name = "Flocking" description = "Симуляция координированного полёта огромных стай птиц" imgsrc="flocking.jpg"/>
                <Card name = "Silovie_Linii" description = "Графическое средство для представления векторных полей" imgsrc="siloviilinii.jpg"/>
                <Card name = "Idk" description = "Тут можно еще добавить" imgsrc="cool-pic.png"/>
            </div>
        </div>
    );
}

export default Projects;
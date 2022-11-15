import './Projects.css'
import Card from './Card/Card';

function Projects(){
    return(
        <div>
            <h2>Мои Проекты</h2>
            <div>
                <Card name = "Проект 1" description = "описание"/>
                <Card name = "Проект 2" description = "описание"/>
                <Card name = "Проект 3" description = "описание"/>
            </div>
        </div>
    );
}

export default Projects;
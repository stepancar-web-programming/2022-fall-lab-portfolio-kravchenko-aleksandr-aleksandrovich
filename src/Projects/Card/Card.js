import './Card.css'
function Card(props){
    const {name, description, src, imgsrc} = props

    return(
        <a href={`${src}`} class="card">
            <h3>{name}</h3>
            <p>{description}</p>
            <div class='trim'>
                <img src={`${process.env.PUBLIC_URL}img/projects/${imgsrc}`} alt={`${name} картинка`}/>
            </div>
        </a>
    );
}
export default Card;
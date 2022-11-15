import './Card.css'
function Card(props){
    const {name, description, src} = props
    return(
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={`${src}`}>ссылка</a>
        </div>
    );
}
export default Card;
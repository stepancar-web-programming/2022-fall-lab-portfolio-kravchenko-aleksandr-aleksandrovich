import './Hobbies.css'


function Hobbies(){
    return (
        <div>
            <h2>Хобби</h2>
            <p>В свободное время я увлекаюсь сочинением музыки</p>
            <video controls width="400">
                <source src={`${process.env.PUBLIC_URL}timelapse.mp4`} type="video/mp4"/>
            </video>
            <audio controls>
            <source src={`${process.env.PUBLIC_URL}da.mp3`} type="audio/mpeg"/>
            </audio>
        </div>
    )
}

export default Hobbies;
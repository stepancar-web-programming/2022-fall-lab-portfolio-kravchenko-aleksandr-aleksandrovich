import React from 'react';
import './Hobbies.css'

function Hobbies() {
    return (
        <div class="hobbies">
            <h2>Мои Хобби</h2>
            <p>В свободное время я увлекаюсь сочинением музыки</p>
            <video controls width="400">
                <source src={`${process.env.PUBLIC_URL}media/timelapse.mp4`} type="video/mp4" />
            </video>
            <p>Вот трек который я написал</p>
            <audio controls>
                <source src={`${process.env.PUBLIC_URL}media/da.mp3`} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Hobbies;
import React from 'react';
import './Profile.css'

function Profile(){
    return (
        <div class = "profile">
            <h2>Обо мне</h2>
            <div>
                <img src={`${process.env.PUBLIC_URL}img/profile-pic.jpg`} alt = "pic" />
            </div>
            <div class='info'>
                <h1>Кравченко Александр Александрович</h1>
                <h2>Junior Java backend-developer</h2>
                <p>Я люблю пельмени и программирование</p>
            </div>
        </div>
    )
}

export default Profile;
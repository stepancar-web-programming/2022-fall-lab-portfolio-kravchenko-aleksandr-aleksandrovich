import './Profile.css'


function Profile(){
    return (
        <div>
            <h2>Обо мне</h2>
            <img src={`${process.env.PUBLIC_URL}profile-pic.jpg`} alt = "pic" width = "400" height = "400" />
            <h1>Кравченко Александр Александрович</h1>
            <h2>Junior Java backend-developer</h2>
            <p>Я люблю пельмени и программирование</p>
        </div>
    )
}

export default Profile;
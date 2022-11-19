import './Project.css'

function Project(props) {
	const { MyProject } = props;
	if (MyProject != null)
		return (
			<div class="project">
				<MyProject />
			</div>
		);
	else {
		return (
			<div class="project">
				<h1>Comming soon</h1>
				<h3>Сейчас работает только BouncyBall</h3>
			</div>
		)
	}
}

export default Project;
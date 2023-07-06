

export const Card = ({project}) => {
	return (
		<div className="card">
			<div className="card-content">
				<div>Title: {project.title}</div>
				<img src={`/screenshots/${project.screenshot}`} alt={`screenshot of project ${project.projectId}`} className="project-screenshot"></img>
				<div>URL: <a href={project.url} className="url-link">{project.url}</a></div>
				<div>Description: {project.description}</div>
				<div>Technology used: {project.techUsed}</div>
			</div>
		</div>
	)
}

export const CardList = ({projectsList}) => {
	return (
		<div className="card-list">
			{projectsList.map(project => <Card project={project} key={project.projectId}></Card>)}
		</div>
	)
}
export const Card = ({project}) => {
	return (
		<div className="card-single">
			<div>Title: {project.title}</div>
			<div>{project.screenshot}</div>
			<div>Github: {project.github}</div>
			<div>Description: {project.description}</div>
			<div>Technology used: {project.techUsed}</div>
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
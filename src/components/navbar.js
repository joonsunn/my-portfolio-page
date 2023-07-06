export const Navbar = () => {
	const navBarItems = [
		{
			itemText: 'HOME',
			itemUrl: '',
		},
		// {
		// 	itemText: 'PROFILE',
		// 	itemUrl: '',
		// },
		{
			itemText: 'GITHUB',
			itemUrl: 'https://github.com/joonsunn',
		},
	]
	
	return (
		<div className="navbar">
			{navBarItems.map((item, key) => 
			<a href={item.itemUrl} className="navbar-item-link" key={key}>
				<div className="navbar-item">
					{item.itemText}
				</div>
			</a>
			)}
		</div>
	)
}
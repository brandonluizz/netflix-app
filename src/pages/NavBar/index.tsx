import React from 'react'
import logoImage from '../../assets/images/netflix-logo-5.png'
import './index.css'

function NavBar() {
	return (
		<header className="nav">
			<ul>
				<img src={logoImage} alt="Site logo" className="logo" />
				<li><a href="#" className="nav-link active">Início</a></li>
				<li><a href="#" className="nav-link">Séries</a></li>
				<li><a href="#" className="nav-link">Filmes</a></li>
				<li><a href="#" className="nav-link">Bombando</a></li>
				<li><a href="#" className="nav-link">Minha Lista</a></li>
			</ul>
		</header>
	)
}

export default NavBar

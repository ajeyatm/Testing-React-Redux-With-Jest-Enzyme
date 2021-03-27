import React from 'react'
import './header.scss'
import Logo from '../../assets/images/logo.png'

const Header = () => (
	<header>
		<div className='wrap'>
			<div className='logo'>
				<img src={Logo} alt='logo' />
			</div>
		</div>
	</header>
)

export default Header

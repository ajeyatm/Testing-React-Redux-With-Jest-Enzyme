import React from 'react'
import './header.scss'
import Logo from '../../assets/images/logo.png'

const Header = () => (
	<header data-test='headerComponent'>
		<div className='wrap'>
			<div className='logo'>
				<img src={Logo} alt='logo' data-test='logoIMG' />
			</div>
		</div>
	</header>
)

export default Header

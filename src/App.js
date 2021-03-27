import Header from './components/header'
import './app.scss'
import Headline from './components/headline'

function App() {
	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Headline headline='Posts' desc='Click the button to list the posts' />
			</section>
		</div>
	)
}

export default App

import Header from './components/header'
import './app.scss'
import Headline from './components/headline'
import SharedButton from './components/button'

const tempArr = [
	{
		fName: 'ajeya',
		age: 26,
		online: true,
	},
]

function App() {
	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Headline
					headline='Posts'
					desc='Click the button to list the posts'
					tempArr={tempArr}
				/>
				<SharedButton buttonText='Get Posts' />
			</section>
		</div>
	)
}

export default App


import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

const App = () => {
  return (
		<div className="App">
			<Message />
			{/* <Greet name="Bruce" character="Batman">
				<p>This is children props</p>
			</Greet>
			<Greet name="Clark" heroName="Superman" />
			<Greet name="Diana" heroName="Wonderwoman" />
			<Greet name="Bruce" heroName="Batman" />
			<Welcome name="Bruce" heroName="Batman" />
			<Welcome name="Bruce" heroName="Superman" />
			<Welcome name="Bruce" heroName="Wonder Woman" /> */}
			{/* {<Welcome/> */}
			{/* <Hello /> */}
		</div>
	);
}

export default App;

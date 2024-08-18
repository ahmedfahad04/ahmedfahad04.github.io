import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

function App() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
			</Routes>
		</main>
	);
}

export default App;

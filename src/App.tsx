import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { REPO_NAME } from "./constants"

function App() {
	return (
		<div className="weather">
			<BrowserRouter basename={`/${REPO_NAME}/`}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/not-found' element={<NotFound />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Form from './componetns/Form';
import PersonalInfo from './componetns/PersonalInfo';
import OtherInfo from './componetns/OtherInfo';

import './globalStyle.scss';

const App = () => {
	return (
		
		<Router>
			<Routes>
				<Route path='/' element={<Form />} />
				<Route path='/personalInfo' element={<PersonalInfo />} />
				<Route path='/otherInfo' element={<OtherInfo />} />
			</Routes>
		</Router>
	);
};

export default App;

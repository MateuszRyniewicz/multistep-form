import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import './Form.scss';

const Popup = () => {
	const { formData, setIsOpen } = useContext(DataContext);
	
	return (
		<div className='popup'>
			<h3>Data</h3>
			<div className='popup-details'>
				<div className='popup-details-text'>
					<p>TaskName: {formData.taskName}</p>
				</div>
				<div className='popup-details-text'>
					<p>Date: {formData.date}</p>
				</div>
				<div className='popup-details-text'>
					<p>Name: {formData.name}</p>
				</div>
				<div className='popup-details-text'>
					<p>Age: {formData.age}</p>
				</div>
				<div className='popup-details-text'>
					<p>Color: {formData.color}</p>
				</div>
				<div className='popup-details-text'>
					<p>Meal: {formData.meal}</p>
				</div>
			</div>
			<button className='popup-button' onClick={() => setIsOpen(false)}>
				Close
			</button>
		</div>
	);
};

export default Popup;

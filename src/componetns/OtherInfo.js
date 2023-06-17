import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataContext';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Popup from './Popup';

import './Form.scss';


const OtherInfo = () => {
	const { formData, setFormData, isOpen, setIsOpen } = useContext(DataContext);

	const validationSchema = () =>
		Yup.object().shape({
			color: Yup.string().required('color is required'),
			meal: Yup.string().required('meal is required'),
		});

	const initialValues = {
		taskName: formData.taskName,
		date: formData.date,
		name: formData.name,
		age: formData.age,
		color: formData.color,
		meal: formData.meal,
	};


	const submitForm = (values) => {
		setFormData({
			taskName: values.taskName,
			date: values.date,
			name: values.name,
			age: values.age,
			color: values.color,
			meal: values.meal,
		});
	};

	return (

		<>
			{isOpen && <Popup />}
			<div className='form-container'>
				<div className='form-box'>
					<div className='form-progressbar-box'>
						<div className='form-progressbar-box-step-details'>
							<div className='form-progressbar-box-step-details-number'>
								<p className='form-progressbar-step-details-number'>1</p>
							</div>
							<div className='form-progressbar-box-step-details-text'>
								Details
							</div>
							<div className='form-progress-box-step-details-linear-box' />
						</div>
						<div className='form-progressbar-box-step-details'>
							<div className='form-progressbar-box-step-details-number'>
								<p className='form-progressbar-step-details-number'>2</p>
							</div>
							<div className='form-progressbar-box-step-details-text'>
								Preferences
							</div>
							<div className='form-progress-box-step-details-linear-box' />
						</div>
						<div
							className='form-progressbar-box-step-details'
							style={{ color: '#fff' }}>
							<div className='form-progressbar-box-step-details-number'>
								<p className='form-progressbar-step-details-number'>3</p>
							</div>
							<div className='form-progressbar-box-step-details-text'>
								Complete
							</div>
							<div className='form-progress-box-step-details-linear-box' />
						</div>
					</div>

					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={submitForm}>
						{(formik) => {
							const {
								values,
								errors,
								touched,
								handleChange,
								handleSubmit,
								handleBlur,
							} = formik;
							
							return (
								<form className='form' onSubmit={handleSubmit} noValidate>
									<h3 className='form-header-text'>Other</h3>
									<div className='form-box-input'>
										<label className='form-input-text'>Color</label>
										<input
											className='form-input'
											type='text'
											name='color'
											placeholder='color'
											value={values.color}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
									</div>
									<div className='form-box-error-message'>
										{errors.color && touched.color && (
											<p className='form-error-message'>{errors.color}</p>
										)}
									</div>
									<div className='form-box-input'>
										<label className='form-input-text'>Meal</label>
										<input
											className='form-input'
											type='text'
											name='meal'
											placeholder='meal'
											value={values.meal}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
									</div>
									<div className='form-box-error-message'>
										{errors.meal && touched.meal && (
											<p className='form-error-message'>{errors.meal}</p>
										)}
									</div>
									<div className='form-box-buttons'>
										<Link className='form-box-button' to='/personalInfo'>
											<button className='form-button'>Prev</button>
										</Link>
										{(values.taskName,
										values.date,
										values.name,
										values.age,
										values.color,
										values.meal) && (
											<div className='form-box-button'>
												<button
													type='button'
													className='form-button'
													onClick={() => {
														setIsOpen(true);
														submitForm(values);
													}}>
													pop-up
												</button>
											</div>
										)}
									</div>
								</form>
							);
						}}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default OtherInfo;

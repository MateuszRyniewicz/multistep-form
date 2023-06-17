import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataContext';

import { Formik } from 'formik';
import * as Yup from 'yup';

import './Form.scss';


const Form = () => {
	const { formData, setFormData } = useContext(DataContext);
	console.log('details', formData);
	const validationSchema = () =>
		Yup.object().shape({
			taskName: Yup.string().required('task name is required'),
			date: Yup.date().required('date is required'),
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
			color: formData.color,
			meal: formData.meal,
		});
	};

	return (
		
		<>
			<div className='form-container'>
				<div className='form-box'>
					<div className='form-progressbar-box'>
						<div
							className='form-progressbar-box-step-details'
							style={{ color: '#fff' }}>
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
						<div className='form-progressbar-box-step-details'>
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
									<h3 className='form-header-text'>Details</h3>
									<div className='form-box-input'>
										<label className='form-input-text'>Task Name</label>
										<input
											className='form-input'
											type='text'
											name='taskName'
											placeholder='task name'
											value={values.taskName}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
									</div>
									<div className='form-box-error-message'>
										{errors.taskName && touched.taskName && (
											<p className='form-error-message'>{errors.taskName}</p>
										)}
									</div>
									<div className='form-box-input'>
										<label className='form-input-text'>Date</label>
										<input
											className='form-input'
											type='date'
											name='date'
											placeholder='date'
											value={values.date}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
									</div>
									<div className='form-box-error-message'>
										{errors.date && touched.date && (
											<p className='form-error-message'>{errors.date}</p>
										)}
									</div>
									<div className='form-box-buttons'>
										{(values.taskName, values.date) && (
											<Link className='form-box-button' to='/personalInfo'>
												<button
													disabled={false}
													className='form-button'
													onClick={() => {
														submitForm(values);
													}}>
													Next
												</button>
											</Link>
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

export default Form;
//  content.box

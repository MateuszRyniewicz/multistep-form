import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataContext';

import { Formik } from 'formik';
import * as Yup from 'yup';

import './Form.scss';


const PersonalInfo = () => {
	const { formData, setFormData } = useContext(DataContext);

	const validationSchema = () =>
		Yup.object().shape({
			name: Yup.string().required('name is required'),
			age: Yup.number()
				.typeError('age must be a number')
				.min(1, 'age must be greater then 0')
				.max(100, 'limit is 100 years ')
				.required('age is required'),
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
					<div
						className='form-progressbar-box-step-details'
						style={{ color: '#fff' }}>
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
								<h3 className='form-header-text'>Personal Info</h3>
								<div className='form-box-input'>
									<label className='form-input-text'>Name</label>
									<input
										className='form-input'
										type='text'
										name='name'
										placeholder='name'
										value={values.name}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
								</div>
								<div className='form-box-error-message'>
									{errors.name && touched.name && (
										<p className='form-error-message'>{errors.name}</p>
									)}
								</div>
								<div className='form-box-input'>
									<label className='form-input-text'>Age</label>
									<input
										className='form-input'
										type='text'
										name='age'
										placeholder='age'
										value={values.age}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
								</div>
								<div className='form-box-error-message'>
									{errors.age && touched.age && (
										<p className='form-error-message'>{errors.age}</p>
									)}
								</div>
								<div className='form-box-buttons'>
									<Link className='form-box-button' to='/'>
										<button className='form-button'>Prev</button>
									</Link>
									{(values.taskName,
									values.date,
									values.name,
									values.age &&
										values.age !== Yup.string &&
										values.age <= 100) && (
										<Link className='form-box-button' to='/otherInfo'>
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
	);
};
export default PersonalInfo;

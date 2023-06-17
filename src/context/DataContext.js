import { createContext, useState } from 'react';

export const DataContext = createContext();


export const DataContextProvider = ({ children }) => {

	const [isOpen, setIsOpen] = useState();

	const [formData, setFormData] = useState({
		taskName: '',
		date: '',
		name: '',
		age: '',
		color: '',
		meal: '',
	});

	return (
		<DataContext.Provider value={{ formData, setFormData, isOpen, setIsOpen }}>
			{children}
		</DataContext.Provider>
	);
};

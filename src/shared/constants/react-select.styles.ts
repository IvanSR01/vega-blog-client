export const reactSelectStyles: TStyles = {
	control: (provided: any) => ({
		...provided,
		borderColor: 'var(--accentColor)',
		'&:hover': {
			borderColor: 'var(--accentColor)'
		},
		boxShadow: 'none'
	}),
	option: (provided: any, state: any) => ({
		...provided,
		backgroundColor: state.isSelected
			? 'var(--accentColor)'
			: state.isFocused
			? 'rgba(var(--accentColor-rgb), 0.1)'
			: 'white',
		color: state.isSelected ? 'white' : 'var(--accentColor)'
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: 'var(--accentColor)'
	}),
	menu: (provided: any) => ({
		...provided,
		borderRadius: '5px',
		boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
	})
}

type TStyles = {
	control: any
	option: any
	singleValue: any
	menu: any
}

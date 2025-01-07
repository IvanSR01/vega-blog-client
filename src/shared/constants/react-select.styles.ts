export const reactSelectStyles: TStyles = {
	control: (provided: any) => ({
		...provided,
		borderColor: 'var(--accent-main-color)',
		'&:hover': {
			borderColor: 'var(--accent-main-color)'
		},
		boxShadow: 'none',
		backgroundColor: 'var(--bg-input-color)',
		color: 'var(--text-main-color)'
	}),

	option: (provided: any, state: any) => ({
		...provided,
		backgroundColor: state.isSelected
			? 'var(--accent-light-color)'
			: state.isFocused
				? 'rgba(var(--accent-main-color-rgb), 0.1)'
				: 'var(--bg-sub-color)',
		color: state.isSelected
			? 'var(--text-main-color)'
			: 'var(--accent-main-color)'
	}),

	singleValue: (provided: any) => ({
		...provided,
		color: 'var(--accent-main-color)'
	}),

	menu: (provided: any) => ({
		...provided,
		borderRadius: '5px',
		boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
		backgroundColor: 'var(--bg-main-color)'
	})
}

type TStyles = {
	control: any
	option: any
	singleValue: any
	menu: any
}

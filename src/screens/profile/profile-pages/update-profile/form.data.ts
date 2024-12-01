import { Input } from '@/screens/auth/auth.data'

export const inputDataUpdateProfile: Input[] = [
	{
		name: 'email',
		type: 'email',
		placeholder: 'Email',
		required: true,
		heading: 'Email'
	},
	{
		name: 'password',
		type: 'password',
		placeholder: 'Password',
		required: true,
		heading: 'Password'
	},
	{
		name: 'firstName',
		type: 'text',
		placeholder: 'First Name',
		required: true,
		heading: 'First Name'
	},
	{
		name: 'middleName',
		type: 'text',
		placeholder: 'Middle Name',
		required: false,
		heading: 'Middle Name'
	},
	{
		name: 'lastName',
		type: 'text',
		placeholder: 'Last Name',
		required: true,
		heading: 'Last Name'
	},
	{
		name: 'jobTitle',
		type: 'text',
		placeholder: 'Job Title',
		required: false,
		heading: 'Job Title'
	},
	{
		name: 'description',
		type: 'textarea',
		placeholder: 'Description',
		required: true,
		heading: 'Description'
	}
]

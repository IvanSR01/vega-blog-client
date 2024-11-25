/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { AuthApi, useAuth } from '@/hooks/useAuth'
import { useError } from '@/hooks/useError'
import { Input } from '@/screens/auth/auth.data'
import { AuthResponse } from '@/shared/interfaces/auth-response.interface'
import { TypeRegister } from '@/shared/types/auth.type'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { toast } from 'react-toastify'
import Form from '../auth-components/form/Form'
import AuthLayoutPage from '../auth-layout-page/AuthLayoutPage'
import styles from './RegisterScreen.module.scss'

interface Props {
	inputData: Input[]
}

const RegisterScreen: FC<Props> = ({ inputData }) => {
	const { push } = useRouter()
	const { onSubmit, isPending } = useAuth<TypeRegister, AuthResponse>({
		api: AuthApi.REGISTER,
		onError: err => toast.error(useError(err)),
		onSuccess: () => push('/dashboard/chats')
	})
	return (
		<AuthLayoutPage image='/auth/register.jpg' imageOrder='right'>
			<h2 className={styles.heading}>Register</h2>
			<Form
				name='register'
				inputData={inputData}
				onSubmit={onSubmit}
				isPending={isPending}
				button={'register'}
			/>
			<div className={styles.footer}>
				Already have an account? <Link href='/auth/login'>Login</Link>
			</div>
		</AuthLayoutPage>
	)
}

export default RegisterScreen

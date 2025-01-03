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
import Form from '../../../shared/ui/form/Form'
import AuthLayoutPage from '../auth-layout-page/AuthLayoutPage'
import styles from './RegisterScreen.module.scss'
import { LINKS } from '@/shared/constants/links'

interface Props {
	inputData: Input[]
}

const RegisterScreen: FC<Props> = ({ inputData }) => {
	const { push } = useRouter()
	const { onSubmit, isPending } = useAuth<TypeRegister, AuthResponse>({
		api: AuthApi.REGISTER,
		onError: err => toast.error(useError(err)),
		onSuccess: () => push(LINKS.HOME)
	})
	return (
		<AuthLayoutPage image='/auth/register.jpg' imageOrder='right'>
			<h2 className={styles.heading}>Register</h2>
			<Form
				inputData={inputData}
				onSubmit={onSubmit}
				isPending={isPending}
				button={'register'}
			/>
			<div className={styles.footer}>
				Already have an account? <Link href={LINKS.AUTH_SING_UP}>Login</Link>
			</div>
		</AuthLayoutPage>
	)
}

export default RegisterScreen

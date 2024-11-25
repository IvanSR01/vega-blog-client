/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { AuthApi, useAuth } from '@/hooks/useAuth'
import { useError } from '@/hooks/useError'
import { TypeLogin } from '@/shared/types/auth.type'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Form from '../auth-components/form/Form'
import styles from './LoginScreen.module.scss'
import { Input } from '@/screens/auth/auth.data'
import { FC } from 'react'
import AuthLayoutPage from '../auth-layout-page/AuthLayoutPage'
import { AuthResponse } from '@/shared/interfaces/auth-response.interface'
import { LINKS } from '@/shared/constants/links'
import { BsArrowLeft } from 'react-icons/bs'
interface Props {
	inputData: Input[]
}

const LoginScreen: FC<Props> = ({ inputData }) => {
	const { push } = useRouter()
	const { onSubmit, isPending } = useAuth<TypeLogin, AuthResponse>({
		api: AuthApi.LOGIN,
		onError: err => toast.error(useError(err)),
		onSuccess: data => {
			if (data.isVerified) push('/dashboard/chats')
			else push('/auth/email')
		}
	})
	return (
		<AuthLayoutPage image='/auth/login.jpg' imageOrder='left'>
			<Link href={LINKS.HOME} className={styles.back}>
				<BsArrowLeft />
				<p>Back to Home</p>
			</Link>
			<h2 className={styles.heading}>Login</h2>
			<Form
				name='login'
				inputData={inputData}
				onSubmit={onSubmit}
				isPending={isPending}
				button={'login'}
			/>
			<div className={styles.footer}>
				Don’t have an account? <Link href={LINKS.AUTHSINGUP}>Create one</Link>
			</div>
		</AuthLayoutPage>
	)
}

export default LoginScreen

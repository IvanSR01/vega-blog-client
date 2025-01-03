import NotFoundPage from '@/app/not-found'
import { useProfile } from '@/hooks/useProfile'
import { PropsWithChildren } from 'react'

import FullScreenLoader from '../../full-screen-loader/FullScreenLoader'

export function CheckRole({ children }: PropsWithChildren) {
	const { profile, isLoading } = useProfile()

	if (isLoading) return <FullScreenLoader />

	if (!profile || (profile && !profile.role.includes('admin'))) {
		return <NotFoundPage />
	}

	return children
}

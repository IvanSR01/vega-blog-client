import { useProfile } from '@/hooks/useProfile'
import { LINKS } from '@/shared/constants/links'
import { getTokens } from '@/shared/cookie/tokens.cookie'
import { useEffect, useState } from 'react'

export const initialNavData: TypeNavData[] = [
	{
		path: '/',
		name: 'Home'
	},
	{
		path: '/blog',
		name: 'Blog'
	},
	{
		path: '/single-post',
		name: 'Single Post'
	},
	{
		path: '/contact/request',
		name: 'Contact'
	}
]

export type TypeNavData = {
	path: string
	name: string
}

export function useNavigateData(): TypeNavData[] {
	const [navData, setNavData] = useState<TypeNavData[]>(initialNavData)
	const { profile } = useProfile()
	const { refreshToken: token } = getTokens()

	useEffect(() => {
		let updatedNavData = [...initialNavData]

		if (!token) {
			updatedNavData = updatedNavData.filter(
				item => item.path !== LINKS.PROFILE
			)
			if (!updatedNavData.some(item => item.path === LINKS.AUTH_SING_IN)) {
				updatedNavData.push({
					path: LINKS.AUTH_SING_IN,
					name: 'Sign in'
				})
			}
		} else if (token && profile?.role.includes('admin')) {
			updatedNavData = updatedNavData.filter(
				item => item.path !== LINKS.PROFILE
			)
			if (!updatedNavData.some(item => item.path === LINKS.ADMIN_USERS)) {
				updatedNavData.push({
					path: LINKS.ADMIN_USERS,
					name: 'Admin'
				})
			}
		} else {
			updatedNavData = updatedNavData.filter(
				item => item.path !== LINKS.ADMIN_USERS
			)
			if (!updatedNavData.some(item => item.path === LINKS.PROFILE)) {
				updatedNavData.push({
					path: LINKS.PROFILE,
					name: 'Profile'
				})
			}
		}

		setNavData(updatedNavData)
	}, [token, profile])

	return navData
}

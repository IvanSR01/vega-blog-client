import { useProfile } from '@/hooks/useProfile'
import { User } from '@/shared/interfaces/user.interface'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function useBanner(author: User) {
	const { profile } = useProfile()
	const pathname = usePathname()
	const [isYourProfile, setIsYourProfile] = useState(false)
	const [isAuthorPage, setIsAuthorPage] = useState(false)

	useEffect(() => {
		if (profile?.id === author?.id) {
			setIsYourProfile(true)
		}
		if (
			pathname === `/author/${author?.id}` ||
			pathname === `/profile/author`
		) {
			setIsAuthorPage(true)
		}
	}, [pathname, profile, author])

	return useMemo(
		() => ({ isYourProfile, isAuthorPage }),
		[isYourProfile, isAuthorPage]
	)
}

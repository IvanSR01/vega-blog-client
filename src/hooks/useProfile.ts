/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import userService from '@/services/user-service/user.service'
import { getTokens } from '@/shared/cookie/tokens.cookie'
import { User } from '@/shared/interfaces/user.interface'
import { setMe } from '@/store/slice/me.slice'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

import { useAppDispatch, useAppSelector } from './useAction'

export const useProfile = (): {
	profile: User
	globalReState: () => void
	isLoading: boolean
} => {
	const { refreshToken } = getTokens()
	const dispatch = useAppDispatch()
	const profile = useAppSelector(state => state.me.me)

	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile(),
		enabled: !profile || !!refreshToken
	})

	useEffect(() => {
		if (user && !profile) {
			dispatch(setMe(user))
		}
	}, [user, profile, dispatch])

	const globalReState = async () => {
		const data = await userService.profile()

		dispatch(setMe(data))
	}

	return useMemo(
		() => ({ profile: profile || (user as User), globalReState, isLoading }),
		[globalReState, profile, user]
	)
}

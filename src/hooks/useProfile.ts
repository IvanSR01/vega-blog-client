/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import userService from '@/services/user-service/user.service'
import { setMe } from '@/store/slice/me.slice'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from './useAction'
import { User } from '@/shared/interfaces/user.interface'
import { getTokens } from '@/shared/cookie/tokens.cookie'

export const useProfile = (): {
	profile: User
	globalReState: () => void
} => {
	const {refreshToken} = getTokens()
	const dispatch = useAppDispatch()
	const profile = useAppSelector(state => state.me.me)

	const { data: user } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile(),
		enabled: !profile || !!refreshToken
	})

	useEffect(() => {
		if (user && !profile) {
			dispatch(setMe(user))
		}
	}, [user, profile, dispatch])

	const globalReState = async() => {
		const data = await userService.profile()

		dispatch(setMe(data))
	}

	return useMemo(
		() => ({ profile: profile || (user as User), globalReState }),
		[globalReState, profile, user]
	)
}

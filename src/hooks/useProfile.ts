/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import userService from '@/services/user-service/user.service'
import { getTokens } from '@/shared/cookie/tokens.cookie'
import { User } from '@/shared/interfaces/user.interface'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'


export const useProfile = (): {
	profile: User
	globalReState: () => void
	isLoading: boolean
} => {
	const { refreshToken } = getTokens()
	const {
		data: user,
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile(),
		enabled: !!refreshToken
	})

	const globalReState = async () => {
		refetch()
	}

	return useMemo(
		() => ({ profile: user as User, globalReState, isLoading }),
		[globalReState, user]
	)
}

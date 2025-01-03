/* eslint-disable react-hooks/exhaustive-deps */
import { useProfile } from '@/hooks/useProfile'
import userService from '@/services/user-service/user.service'
import { useMutation } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

export const useFollow = (authorId: number) => {
	const { profile, globalReState } = useProfile()
	const [isFollow, setIsFollow] = useState(
		profile?.subscriptions.some(sub => sub.id === authorId)
	)
	const { replace } = useRouter()
	const pathname = usePathname()
	useEffect(() => {
		if (profile) {
			setIsFollow(profile.subscriptions.some(sub => sub.id === authorId))
		}
	}, [profile, authorId])

	const { mutate } = useMutation({
		mutationFn: () => userService.toggleSubscribe(authorId),
		onSuccess: () => {
			replace(pathname)
			globalReState()
		},
		onError: () => toast.error('Something went wrong')
	})

	const toggleFollow = () => {
		if (!profile)
			return toast.error('You need to sign in to subscribe to an author')
		mutate()
	}

	return useMemo(
		() => ({
			isFollow,
			toggleFollow
		}),
		[isFollow, toggleFollow]
	)
}

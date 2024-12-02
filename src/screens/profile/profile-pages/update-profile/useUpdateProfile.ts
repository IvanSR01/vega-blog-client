/* eslint-disable react-hooks/rules-of-hooks */
import { useError } from '@/hooks/useError'
import { useProfile } from '@/hooks/useProfile'
import { useUpload } from '@/hooks/useUpload'
import userService from '@/services/user-service/user.service'
import { User } from '@/shared/interfaces/user.interface'
import { FileResponse } from '@/shared/types/file.type'
import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { toast } from 'react-toastify'

export const useUpdateProfile = () => {
	const { profile, globalReState } = useProfile()
	const [image, setImage] = useState<string>(profile?.avatar)
	const updateAvatar = (file: FileResponse | null) =>
		setImage(file ? `/${file?.path.replaceAll('\\', '/')}` : '')

	const { upload } = useUpload(updateAvatar)
	const { mutate } = useMutation({
		mutationFn: (p: User) => userService.updateProfile({ ...p, avatar: image }),
		onError: err => toast.error(useError(err)),
		onSuccess: () => {
			toast.success('Profile updated successfully')
			globalReState()
		}
	})

	return useMemo(
		() => ({
			profile,
			upload,
			mutate,
			image
		}),
		[profile, upload, mutate, image]
	)
}

/* eslint-disable react-hooks/rules-of-hooks */
import { useError } from '@/hooks/useError'
import { MailDto } from '@/services/mail-service/mail.dto'
import mailService from '@/services/mail-service/mail.service'
import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export function useSendMail() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<MailDto>()
	const { mutate } = useMutation({
		mutationFn: (d: MailDto) => mailService.sendMail(d),
		onSuccess: () => toast.success('Message sent successfully'),
		onError: err => toast.error(useError(err))
	})
	const onSubmit = handleSubmit((data: MailDto) => mutate(data))

	return useMemo(
		() => ({
			register,
			onSubmit,
			errors
		}),
		[errors, onSubmit, register]
	)
}

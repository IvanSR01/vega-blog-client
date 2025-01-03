'use client'

import BackLink from '@/components/back-link/BackLink'
import { LINKS } from '@/shared/constants/links'
import { User } from '@/shared/interfaces/user.interface'
import Form from '@/shared/ui/form/Form'
import Input from '@/shared/ui/input/Input'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import { FC, useEffect, useRef, useState } from 'react'
import { FaEdit } from 'react-icons/fa'

import styles from './UpdateProfilePage.module.scss'
import { inputDataUpdateProfile } from './form.data'
import { useUpdateProfile } from './useUpdateProfile'

interface Social {
	facebook: string
	twitter: string
	instagram: string
	youtube: string
}

const UpdateProfilePage: FC = () => {
	const { profile, mutate, upload, image } = useUpdateProfile()
	const inputRef = useRef<HTMLInputElement>(null)
	const [social, setSocial] = useState<Social>({
		facebook: '',
		twitter: '',
		instagram: '',
		youtube: ''
	})

	useEffect(() => {
		if (profile?.social) {
			if (profile.social.facebook)
				setSocial({ ...social, facebook: profile.social.facebook })
			if (profile.social.twitter)
				setSocial({ ...social, twitter: profile.social.twitter })
			if (profile.social.instagram)
				setSocial({ ...social, instagram: profile.social.instagram })
			if (profile.social.youtube)
				setSocial({ ...social, youtube: profile.social.youtube })
		}
	}, [profile])
	return (
		<div className={styles.updateProfile}>
			<div className={styles.content}>
				<BackLink href={LINKS.PROFILE}>Profile</BackLink>
				<h2>Setting</h2>
				<div
					className={styles.avatarContainer}
					onClick={() => inputRef.current?.click()}
				>
					<UserAvatar src={image} alt={profile?.firstName} size='big' />
					<p className={styles.edit}>
						<FaEdit />
					</p>
					<input
						type='file'
						hidden
						accept='image/* video/*'
						ref={inputRef}
						onChange={(e: any) => upload(e.target.files[0])}
					/>
				</div>
				<div className={styles.social}>
					<p className={styles.heading}>Social</p>
					{Object.keys(social).map((item, index) => (
						<div className={styles.item} key={index}>
							<p className={styles.name}>{item}</p>
							<Input
								type='text'
								value={(social as any)[item]}
								placeholder={item}
								onChange={e => {
									setSocial({
										...social,
										[item]: e.target.value
									})
								}}
							/>
						</div>
					))}
				</div>
				<Form
					inputData={inputDataUpdateProfile}
					isPending={false}
					onSubmit={(d: User) => mutate({ ...d, social })}
					button={'Update'}
					defaultValues={profile}
				/>
			</div>
		</div>
	)
}

export default UpdateProfilePage

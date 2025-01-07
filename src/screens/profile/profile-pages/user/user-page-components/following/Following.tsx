import { useProfile } from '@/hooks/useProfile'
import userService from '@/services/user-service/user.service'
import { LINKS } from '@/shared/constants/links'
import Button from '@/shared/ui/button/Button'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import { connectUrl } from '@/shared/utils/connectUrl'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { FC } from 'react'
import { toast } from 'react-toastify'

import styles from './Following.module.scss'

const Following: FC = () => {
	const { profile, globalReState } = useProfile()
	const { mutate } = useMutation({
		mutationFn: (id: number) => userService.toggleSubscribe(id),
		onSuccess: () => {
			globalReState()
		},
		onError: () => toast.error('Something went wrong')
	})
	return (
		<div className={styles.following}>
			{profile?.subscriptions.map((item, index) => (
				<div className={styles.item} key={index}>
					<Link
						href={connectUrl(LINKS.AUTHOR_ID, '/', item.id.toString() || '')}
					>
						<div className={styles.info}>
							<UserAvatar src={item.avatar} alt={item.firstName} />
							<div className={styles.name}>
								<div className={styles.fullName}>
									{item.firstName} {item.lastName}
								</div>
								<div className={styles.slug}>{item.jobTitle}</div>
							</div>
						</div>
					</Link>
					<Button
						onClick={() => mutate(item.id)}
						className={styles.unSubscribe}
					>
						UNFOLLOW
					</Button>
				</div>
			))}
		</div>
	)
}
export default Following

'use client'
import { FC } from 'react'
import styles from './Authors.module.scss'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import More from '../../../components/more/More'
import { useQuery } from '@tanstack/react-query'
import userService from '@/services/user-service/user.service'
import Link from 'next/link'
import { connectUrl } from '@/shared/utils/connectUrl'
import { LINKS } from '@/shared/constants/links'

const Authors: FC = () => {
	const { data } = useQuery({
		queryKey: ['authors'],
		queryFn: () => userService.findAll('', 3)
	})
	return (
		<div className={styles.authors}>
			<div className={styles.authorLayout}>
				<div className={styles.items}>
					{data?.map((item, index) => (
						<Link
							href={connectUrl(LINKS.AUTHOR_ID, '/', item.id.toString())}
							className={styles.item}
							key={index}
						>
							<UserAvatar alt='Tom' size='big' />
							<div className={styles.detail}>
								<p className={styles.name}>
									{item?.firstName} {item?.lastName}
								</p>
								<p className={styles.slug}>
									@{(item?.firstName + item.lastName + index).toLowerCase()}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<More />
		</div>
	)
}

export default Authors

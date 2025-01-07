import { LINKS } from '@/shared/constants/links'
import { User } from '@/shared/interfaces/user.interface'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import { connectUrl } from '@/shared/utils/connectUrl'
import Link from 'next/link'
import { FC } from 'react'

import styles from './MiniAuthor.module.scss'

interface Props {
	author: User | undefined
}

const MiniAuthor: FC<Props> = ({ author }) => {
	return (
		<Link
			href={connectUrl(LINKS.AUTHOR_ID, '/', author?.id.toString() || '')}
			className={styles.miniAuthor}
		>
			<UserAvatar alt='Tom' size='small' src={author?.avatar} />
			<p className={styles.authorName}>
				{author?.firstName} {author?.middleName} {author?.lastName}
			</p>
		</Link>
	)
}
export default MiniAuthor

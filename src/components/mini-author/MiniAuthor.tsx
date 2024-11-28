import { FC } from 'react'
import styles from './MiniAuthor.module.scss'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import Link from 'next/link'
import { User } from '@/shared/interfaces/user.interface'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import { LINKS } from '@/shared/constants/links'

interface Props {
	author: User | undefined
}

const MiniAuthor: FC<Props> = ({ author }) => {
	return (
		<Link
			href={`${LINKS.AUTHOR_ID}/${author?.id}`}
			className={styles.miniAuthor}
		>
			<UserAvatar
				alt='Tom'
				size='small'
				src={addFullUrl(author?.avatar || '')}
			/>
			<p className={styles.authorName}>
				{author?.firstName} {author?.middleName} {author?.lastName}
			</p>
		</Link>
	)
}
export default MiniAuthor

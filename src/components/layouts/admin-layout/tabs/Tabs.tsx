import { LINKS } from '@/shared/constants/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import clsx from 'clsx'
import styles from './Tabs.module.scss'

const Tabs: FC = () => {
	const currentPath = usePathname()
	return (
		<div className={styles.tabs}>
			{tabs.map(item => (
				<Link href={item.path} key={item.path} className={clsx(styles.tab, {
					[styles.active]: currentPath.includes(item.path)
				})}>
					{item.name}
				</Link>
			))}
		</div>
	)
}
export default Tabs

const tabs = [
	{
		name: 'Users',
		path: LINKS.ADMIN_USERS
	},
	{
		name: 'Posts',
		path: LINKS.ADMIN_POSTS
	}, 
	{name: "Other", path: LINKS.ADMIN_OTHER}
]

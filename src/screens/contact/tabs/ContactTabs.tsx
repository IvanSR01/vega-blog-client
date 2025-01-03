'use client'
import { FC } from 'react'
import styles from './ContactTabs.module.scss'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { LINKS } from '@/shared/constants/links'

const ContactTabs: FC = () => {
	const pathname = usePathname()
	return (
		<div className={styles.tabs}>
			<Link
				className={clsx(
					styles.tab,
					pathname === '/contact/request' && styles.active
				)}
				href={LINKS.REQUEST}
			>
				Contact us
			</Link>
			<Link
				className={clsx(
					styles.tab,
					pathname === '/contact/about' && styles.active
				)}
				href={LINKS.ABOUT}
			>
				About us
			</Link>
		</div>
	)
}
export default ContactTabs

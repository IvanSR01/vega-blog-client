'use client'
import { itemVariants } from '@/shared/motion/variants'
import Input from '@/shared/ui/input/Input'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
import MobilMenu from './mobil-menu/MobilMenu'
import { navData } from './nav.data'
import useTheme from './useTheme'
import { useProfile } from '@/hooks/useProfile'
const Header: FC = () => {
	const { checked: isDarkMode, toggleTheme } = useTheme()
	const currentPath = usePathname()
	const router = useRouter()
	const { profile } = useProfile()

	const navigationData = [
		...navData,
		profile
			? { path: '/profile/user', name: 'Profile' }
			: { path: '/auth/sing-in', name: 'Sing In' }
	]

	return (
		<div className={styles.header}>
			<motion.div
				className={styles.logo}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
			>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					<Image
						className={styles.icon}
						src='/light.png'
						width={50}
						height={50}
						alt='VegaBlog Logo'
					/>
				</motion.div>
				<motion.div
					className={styles.text}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					Vega<b>Blog</b>
				</motion.div>
			</motion.div>
			<div className={clsx(styles.nav, styles.desktop)}>
				{navigationData.map((item, index) => (
					<Link href={item.path} key={item.path}>
						<motion.div
							variants={itemVariants}
							initial='init'
							whileInView='animate'
							exit='exit'
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: 0.1 * index }}
							className={clsx(styles.item, {
								[styles.active]: currentPath === item.path
							})}
						>
							{item.name}
						</motion.div>
					</Link>
				))}
			</div>
			<motion.div
				variants={itemVariants}
				initial='init'
				whileInView='animate'
				exit='exit'
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className={clsx(styles.inputs, styles.desktop)}
			>
				{!currentPath.includes('/blog') && (
					<Input
						placeholder='Search...'
						icon={<FaSearch />}
						onChange={() => router.push('/blog')}
						style={{ maxWidth: '200px' }}
					/>
				)}
				<Input
					type='checkbox'
					value={isDarkMode}
					onChange={(e: any) => toggleTheme(e.target.checked)}
					style={{ maxWidth: '50px' }}
				/>
			</motion.div>
			<MobilMenu />
		</div>
	)
}

export default Header

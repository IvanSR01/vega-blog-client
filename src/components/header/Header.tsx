'use client'

import { LINKS } from '@/shared/constants/links'
import { itemVariants } from '@/shared/motion/variants'
import Input from '@/shared/ui/input/Input'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, FC } from 'react'
import { FaSearch } from 'react-icons/fa'

import styles from './Header.module.scss'
import MobilMenu from './mobil-menu/MobilMenu'
import { useNavigateData } from './useNavigateData'
import useTheme from './useTheme'

const Header: FC = () => {
	const { checked: isDarkMode, toggleTheme } = useTheme()
	const currentPath = usePathname()
	const { push } = useRouter()
	const navigationData = useNavigateData()

	const handleSearch = () => push(LINKS.BLOG)
	const handleThemeToggle = (e: ChangeEvent<HTMLInputElement>) =>
		toggleTheme(e.target.checked)

	return (
		<div className={styles.header}>
			<motion.div
				className={styles.logo}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				onClick={() => push(LINKS.HOME)}
			>
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
							animate='animate'
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
				animate='animate'
				transition={{ duration: 0.5, delay: 0.6 }}
				className={clsx(styles.inputs, styles.desktop)}
			>
				{!currentPath.includes('/blog') && (
					<Input
						placeholder='Search...'
						icon={<FaSearch />}
						onChange={handleSearch}
						style={{ maxWidth: '200px' }}
					/>
				)}
				<Input
					type='checkbox'
					value={isDarkMode}
					onChange={handleThemeToggle}
					style={{ maxWidth: '50px' }}
				/>
			</motion.div>

			<MobilMenu />
		</div>
	)
}

export default Header

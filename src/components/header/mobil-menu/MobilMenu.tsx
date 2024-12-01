import { FC, useState, useEffect, useRef } from 'react'
import styles from './MobilMenu.module.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CgClose } from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion'
import { navData } from '../nav.data'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import Input from '@/shared/ui/input/Input'
import { useProfile } from '@/hooks/useProfile'
import useTheme from '../useTheme'

const MobilMenu: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const { checked: isDarkMode, toggleTheme } = useTheme()
	const { profile } = useProfile()

	const navigationData = [
		...navData,
		profile
			? { path: '/profile/user', name: 'Profile' }
			: { path: '/auth/sing-in', name: 'Sing In' }
	]

	useEffect(() => {
		const handlerClick = (e: any) => {
			if (isOpen) {
				if (!menuRef.current?.contains(e.target)) {
					setIsOpen(false)
				}
			}
			return
		}

		document.addEventListener('click', handlerClick)

		return () => document.removeEventListener('click', handlerClick)
	})

	return (
		<div className={styles.mobile}>
			<div className={styles.open} onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <CgClose /> : <RxHamburgerMenu />}
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={styles.menu}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							initial={{ x: 100 }}
							animate={{ x: 0 }}
							exit={{ x: 100 }}
							transition={{ duration: 0.5 }}
							className={styles.content}
							ref={menuRef}
						>
							<Input placeholder='Search...' icon={<FaSearch />} />
							<div className={styles.nav}>
								{navigationData.map(item => (
									<Link
										href={item.path}
										className={styles.item}
										key={item.path}
									>
										{item.name}
									</Link>
								))}
							</div>
							<div className='d-flex gap-3'>
								<Input
									type='checkbox'
									value={isDarkMode}
									onChange={(e: any) => toggleTheme(e.target.checked)}
									style={{
										maxWidth: '50px'
									}}
								/>
								<p className='font-bold'>Dark Mode</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default MobilMenu

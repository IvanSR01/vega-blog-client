import Input from '@/shared/ui/input/Input'
import Link from 'next/link'
import { FC } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				{/* <img className={styles.icon} src='' alt='' /> */}
				<div className={styles.text}>
					Meta<b>Blog</b>
				</div>
			</div>
			<div className={styles.nav}>
				{navData.map(item => (
					<Link href={item.path} className={styles.item} key={item.path}>
						{item.name}
					</Link>
				))}
			</div>
			<div className={styles.inputs}>
				<Input
					placeholder='Search...'
					icon={<FaSearch />}
					style={{
						maxWidth: '200px',
					}}
				/>
				<Input
					type='checkbox'
					style={{
						maxWidth: '50px',
					}}
				/>
			</div>
		</div>
	)
}

export default Header

const navData = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: '/blog',
		name: 'Blog',
	},
	{
		path: '/single-post',
		name: 'Single Post',
	},
	{
		path: '/pages',
		name: 'Pages',
	},
	{
		path: '/contact',
		name: 'Contact',
	},
]

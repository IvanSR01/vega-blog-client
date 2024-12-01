import { FC } from 'react'
import styles from './Footer.module.scss'
import clsx from 'clsx'
import Input from '@/shared/ui/input/Input'
import Button from '@/shared/ui/button/Button'
import { MdEmail } from 'react-icons/md'
import { popularTags } from '@/shared/constants/tags'
import Link from 'next/link'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.about}>
						<h4>About us</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam
						</p>
						<div>
							<b>Email :</b> info@jstemplate.net
						</div>
						<div>
							<b>Phone :</b> 880 123 456 789
						</div>
					</div>
					<div className={clsx(styles.item, 'w-2')}>
						<h4>Quick Link</h4>
						{links.map(item => (
							<Link href={item.href} key={item.title}>
								{item.title}
							</Link>
						))}
					</div>
					<div className={styles.item}>
						<h4>Categorys</h4>
						{categorys.map(item => (
							<Link href={'/blog' + '/' + item} key={item}>
								{item}
							</Link>
						))}
					</div>
					<div className={styles.feedback}>
						<div className='d-flex align-center flex-column gap-1'>
							<h4>Weekly Newsletter</h4>
							<p>Get blog articles and offers via email</p>
						</div>
						<div className='d-flex flex-column gap-2'>
							<Input placeholder='Your email' icon={<MdEmail />} />
							<Button>Subscribe</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer

const links = [
	{ title: 'About', href: '/contact/about' },
	{ title: 'Contact', href: '/contact/request' },
	{ title: 'Blog', href: '/blog' },
	{ title: 'Single Post', href: '/single-post' }
]

const categorys = popularTags.slice(0, 5)

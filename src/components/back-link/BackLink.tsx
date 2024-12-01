import { FC, PropsWithChildren } from 'react'
import styles from './BackLink.module.scss'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

interface Props {
	href: string
}

const BackLink: FC<PropsWithChildren<Props>> = ({ children, href }) => {
	return (
		<Link href={href} className={styles.back}>
			<BsArrowLeft />
			<p>Back to {children}</p>
		</Link>
	)
}
export default BackLink

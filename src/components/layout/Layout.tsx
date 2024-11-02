import { FC, PropsWithChildren } from 'react'
import Header from '../header/Header'
import styles from './Layout.module.scss'
const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>
				<Header />
				{children}
			</div>
		</div>
	)
}

export default Layout

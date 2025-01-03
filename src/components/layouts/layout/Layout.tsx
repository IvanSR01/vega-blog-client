'use client'

import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

const Header = dynamic(() => import('@/components/header/Header'))
const Footer = dynamic(() => import('@/components/footer/Footer'))

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>
				<Header />
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout

/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './AuthLayoutPage.module.scss'
import Image from 'next/image'

interface Props extends PropsWithChildren {
	image?: string
	imageOrder?: 'left' | 'right'
}

export default function AuthLayoutPage({ children, image, imageOrder }: Props) {
	return (
		<div className={styles.container}>
			{image && (
				<div
					className={clsx(styles.image, {
						[styles.left]: imageOrder === 'left'
					})}
				>
					<Image src={image} alt='' width={1600} height={1000} />
				</div>
			)}
			<div className={styles.content}>
				<div className={styles.menu}>{children}</div>
			</div>
		</div>
	)
}

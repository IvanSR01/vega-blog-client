'use client'
import { FC } from 'react'
import styles from './More.module.scss'
import { motion } from 'framer-motion'
import { itemVariants } from '@/shared/motion/variants'

interface Props {
	onClick?: () => void
}

const More: FC<Props> = ({ onClick }) => {
	return (
		<motion.div
			variants={itemVariants}
			initial='init'
			whileInView={'animate'}
			exit={'exit'}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.5
			}}
			onClick={() => (onClick ? onClick() : null)}
			className={styles.more}
		>
			Load More
		</motion.div>
	)
}
export default More

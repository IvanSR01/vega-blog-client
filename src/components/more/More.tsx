'use client'
import { FC } from 'react'
import styles from './More.module.scss'
import { motion } from 'framer-motion'
import { itemVariants } from '@/shared/motion/variants'
import { useSearchQuery } from '@/hooks/useSearchQuery'
const More: FC = () => {
	const { handleChangeSearchTerm, searchTerm } = useSearchQuery({
		queryParam: 'limit',
		disabledScroll: true
	})

	const onClick = () => {
		if(searchTerm) handleChangeSearchTerm(`${+searchTerm + 5}`)
		else handleChangeSearchTerm('15')
	}

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
			onClick={onClick}
			className={styles.more}
		>
			Load More
		</motion.div>
	)
}
export default More

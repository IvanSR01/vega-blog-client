import Image from 'next/image'
import styles from './PopularPost.module.scss'
const PopularPost = () => {
	return (
		<div className={styles.popular}>
			<Image
				src={'/Image.png'}
				alt='post'
				width={1600}
				height={1000}
				className={styles.background}
			/>
			<div className={styles.content__popular}>
				<div className={styles.title}>
					The Impact of Technology on the Workplace: How Technology is Changing
				</div>
			</div>
		</div>
	)
}

export default PopularPost

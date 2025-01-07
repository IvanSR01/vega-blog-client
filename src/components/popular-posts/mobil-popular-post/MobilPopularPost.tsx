import PopularPost from '@/components/popular-post/PopularPost'
import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import { Post } from '@/shared/interfaces/post.interface'
import clsx from 'clsx'
import { FC, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import styles from './MobilPopularPost.module.scss'
import { useScroll } from './useScroll'

interface Props {
	posts: Post[]
}

const MobilPopularPost: FC<Props> = ({ posts }) => {
	const {
		containerRef,
		itemRef,
		handleScroll,
		onLoadScroll
	} = useScroll()

	useEffect(() => {
		onLoadScroll()
	}, [onLoadScroll])

	return (
		<div className={styles.slider}>
			<div className={styles.controls}>
				<button
					className={clsx(styles['swiper-button-prev'], 'swiper-button-prev')}
					onClick={() => handleScroll('left')}
				>
					<FaChevronLeft className={styles['arrow-icon']} />
				</button>
				<button
					className={clsx(styles['swiper-button-next'], 'swiper-button-next')}
					onClick={() => handleScroll('right')}
				>
					<FaChevronRight className={styles['arrow-icon']} />
				</button>
			</div>
			<ScrollLayout
				style={{
					width: '100%',
					display: 'flex',
					gap: '20px',
					paddingBottom: '10px',
					overflowY: 'hidden'
				}}
				ref={containerRef}
			>
				{posts.map((post, index) => (
					<PopularPost
						post={post}
						tag={post.tag.name}
						key={index}
						ref={index ? null : itemRef}
					/>
				))}
			</ScrollLayout>
		</div>
	)
}
export default MobilPopularPost

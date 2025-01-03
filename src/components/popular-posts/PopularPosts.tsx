'use client'

import { Post } from '@/shared/interfaces/post.interface'
import { variants } from '@/shared/motion/variants'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import PopularPost from '../popular-post/PopularPost'
import styles from './PopularPosts.module.scss'

interface Props {
	posts: Post[]
}

const PopularPosts: FC<Props> = ({ posts }) => {
	return (
		<motion.div
			variants={variants}
			initial='init'
			animate={'animate'}
			exit={'exit'}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.2
			}}
			className={styles.wrapper}
		>
			{posts && posts.length > 0 ? (
				<>
					<div className={styles.items}>
						{posts[0] && (
							<PopularPost post={posts[0]} tag={posts[0].tag.name} />
						)}
						{posts[1] && (
							<div className={styles.col}>
								{posts.slice(1, 5).map(post => (
									<PopularPost
										size='small'
										key={post.id}
										post={post}
										tag={post.tag.name}
									/>
								))}
							</div>
						)}
					</div>
					<div className={styles.slider}>
						<Swiper
							modules={[Navigation, Pagination]}
							spaceBetween={20}
							slidesPerView={1}
							initialSlide={2}
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev'
							}}
							pagination={{ clickable: true }}
							autoplay={{
								delay: 3000
							}}
							breakpoints={{
								600: {
									slidesPerView: 2
								}
							}}
						>
							{posts.map(post => (
								<SwiperSlide key={post.id}>
									<PopularPost post={post} tag={post.tag.name} />
								</SwiperSlide>
							))}
						</Swiper>

						{/* Кастомные кнопки */}
						<motion.div
							variants={variants}
							initial='init'
							animate={'animate'}
							exit={'exit'}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.2
							}}
							className={clsx(
								styles['swiper-button-prev'],
								'swiper-button-prev'
							)}
						></motion.div>
						<motion.div
							variants={variants}
							initial='init'
							animate={'animate'}
							exit={'exit'}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.2
							}}
							className={clsx(
								styles['swiper-button-next'],
								'swiper-button-next'
							)}
						></motion.div>
					</div>
				</>
			) : (
				<div className={styles.notFound}>Posts not-found</div>
			)}
		</motion.div>
	)
}

export default PopularPosts

'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './PopularPosts.module.scss'
import PopularPost from '../popular-post/PopularPost'
import clsx from 'clsx'

import { motion } from 'framer-motion'
import { variants } from '@/shared/motion/variants'

const PopularPosts: FC = () => {
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
			<div className={styles.items}>
				<PopularPost img='/Image.png' />
				<div className={styles.col}>
					<PopularPost size='small' img='/Image.png' />
					<PopularPost size='small' img='/Image.png' />
					<PopularPost size='small' img='/Image.png' />
					<PopularPost size='small' img='/Image.png' />
				</div>
			</div>

			{/* Swiper для экранов <= 800px */}
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
					<SwiperSlide>
						<PopularPost img='/Image.png' />
					</SwiperSlide>
					<SwiperSlide>
						<PopularPost img='/Image.png' />
					</SwiperSlide>
					<SwiperSlide>
						<PopularPost img='/Image.png' />
					</SwiperSlide>
					<SwiperSlide>
						<PopularPost img='/Image.png' />
					</SwiperSlide>
					<SwiperSlide>
						<PopularPost img='/Image.png' />
					</SwiperSlide>
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
					className={clsx(styles['swiper-button-prev'], 'swiper-button-prev')}
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
					className={clsx(styles['swiper-button-next'], 'swiper-button-next')}
				></motion.div>
			</div>
		</motion.div>
	)
}

export default PopularPosts

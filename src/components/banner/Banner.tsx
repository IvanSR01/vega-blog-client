'use client'

import { useProfile } from '@/hooks/useProfile'
import { LINKS } from '@/shared/constants/links'
import { User } from '@/shared/interfaces/user.interface'
import { itemVariants } from '@/shared/motion/variants'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import {
	FaEdit,
	FaFacebook,
	FaInstagram,
	FaTrash,
	FaTwitter,
	FaYoutube
} from 'react-icons/fa'

import styles from './Banner.module.scss'
import useBanner from './useBanner'
import { useFollow } from './useFollow'

const Banner: FC = () => {
	const { profile } = useProfile()
	const { isAuthorPage, isYourProfile } = useBanner(profile as User)
	const { isFollow, toggleFollow } = useFollow(profile?.id as number)
	const { push } = useRouter()
	return (
		<motion.div
			variants={itemVariants}
			initial='init'
			animate='animate'
			exit='exit'
			transition={{
				duration: 0.6
			}}
			className={styles.banner}
		>
			<div className={styles.heading}>
				<div className={styles.user}>
					<UserAvatar
						alt={profile?.firstName + ' ' + profile?.lastName}
						size='large'
					/>
					<div className={styles.details}>
						<h4 className={styles.name}>
							{profile?.firstName} {profile?.middleName} {profile?.lastName}
						</h4>
						<p className={styles.slug}>{profile?.jobTitle}</p>
					</div>
				</div>
				<div className={styles.buttons}>
					{isYourProfile ? (
						<>
							<button
								onClick={() => push(LINKS.UPDATE_PROFILE)}
								className={styles.bannerButton}
							>
								<FaEdit />
							</button>
							<button className={styles.bannerButton}>
								<FaTrash />
							</button>
							<button
								className={styles.bannerButton}
								onClick={() =>
									push(isAuthorPage ? LINKS.PROFILE : LINKS.AUTHOR_PROFILE)
								}
							>
								Switch to {isAuthorPage ? 'User' : 'Author'} page
							</button>
						</>
					) : (
						<button
							onClick={() => toggleFollow()}
							className={styles.bannerButton}
						>
							{isFollow ? 'Unfollow' : 'Follow'}
						</button>
					)}
				</div>
			</div>
			<div className={styles.description}>
				{parse(profile?.description || '')}
			</div>
			{isAuthorPage ? (
				<div className={styles.subCount}>
					<div className={styles.count}>
						<h4>Posts</h4>
						<p>{profile?.posts?.length || 0}</p>
					</div>
					<div className={styles.count}>
						<h4>Followers</h4>
						<p>{profile?.subscribers?.length || 0}</p>
					</div>
					<div className={styles.count}>
						<h4>Views count</h4>
						<p>100</p>
					</div>
					<div className={styles.count}>
						<h4>Likes count</h4>
						<p>100</p>
					</div>
				</div>
			) : (
				<div className={styles.subCount}>
					<div className={styles.count}>
						<h4>Favorites posts</h4>
						<p>{profile?.favorites?.length || 0}</p>
					</div>
					<div className={styles.count}>
						<h4>Following</h4>
						<p>{profile?.subscriptions?.length || 0}</p>
					</div>
					<div className={styles.count}>
						<h4>Comments count</h4>
						<p>{profile?.comments?.length || 0}</p>
					</div>
				</div>
			)}
			<div className={styles.social}>
				{profile?.social?.facebook && (
					<a href={profile?.social?.facebook} className={styles.bannerButton}>
						<FaFacebook />
					</a>
				)}
				{profile?.social?.twitter && (
					<a href={profile?.social?.twitter} className={styles.bannerButton}>
						<FaTwitter />
					</a>
				)}
				{profile?.social?.instagram && (
					<a href={profile?.social?.instagram} className={styles.bannerButton}>
						<FaInstagram />
					</a>
				)}
				{profile?.social?.youtube && (
					<a href={profile?.social?.youtube} className={styles.bannerButton}>
						<FaYoutube />
					</a>
				)}
			</div>
		</motion.div>
	)
}
export default Banner

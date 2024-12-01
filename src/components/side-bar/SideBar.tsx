'use client'
import { FC, PropsWithChildren } from 'react'
import styles from './SideBar.module.scss'
import Image from 'next/image'
import { useSideBar } from './useSideBar'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import { formatDate } from '@/shared/utils/formatDate'
import Loader from '../loader/Loader'

interface Props {
	CommonComponent?: FC
}

const SideBar: FC<PropsWithChildren<Props>> = ({
	children,
	CommonComponent
}) => {
	const { popularPosts, popularTags, isLoading } = useSideBar()
	return (
		<div className={styles.layoutSideBar}>
			{children}
			<div className={styles.sideBar}>
				<div className={styles.contentSideBar}>
					{CommonComponent && <CommonComponent />}
					<div className={styles.popularPostS}>
						{isLoading ? (
							<div className={styles.containerLoader}>
								<Loader />
							</div>
						) : (
							<>
								<div className={styles.title}>Popular Post</div>
								{popularPosts && popularPosts.length > 0 ? (
									<div className={styles.items}>
										{popularPosts.map((item, index) => (
											<div className={styles.item} key={index}>
												<div className={styles.image}>
													<Image
														src={addFullUrl(item.cover)}
														loader={() => addFullUrl(item.cover)}
														alt=''
														width={200}
														height={200}
													/>
												</div>
												<div className={styles.detalis}>
													<div className={styles.title}>{item.title}</div>
													<div className={styles.date}>
														{formatDate(item.createdAt)}
													</div>
												</div>
											</div>
										))}
									</div>
								) : (
									<div className={styles.itemsEmpty}>
										<p>No data</p>
									</div>
								)}
							</>
						)}
					</div>
					<div className={styles.popularPostS}>
						{isLoading ? (
							<div className={styles.containerLoader}>
								<Loader />
							</div>
						) : (
							<>
								<div className={styles.title}>Category</div>
								<div className={styles.items}>
									{popularTags && popularTags.length > 0 ? (
										<>
											{popularTags.map((item, index) => (
												<div className={styles.category} key={index}>
													<div className={styles.text}>{item.name}</div>
													<div className={styles.countPost}>
														{item.postCount}
													</div>
												</div>
											))}
										</>
									) : (
										<>No data</>
									)}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default SideBar

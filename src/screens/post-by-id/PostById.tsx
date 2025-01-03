'use client'

import ActionPost from '@/components/action-post/ActionPost'
import Comments from '@/components/comments/Comments'
import MiniAuthor from '@/components/mini-author/MiniAuthor'
import SideBar from '@/components/side-bar/SideBar'
import { LINKS } from '@/shared/constants/links'
import { Comment } from '@/shared/interfaces/comment.interface'
import { Post } from '@/shared/interfaces/post.interface'
import Tag from '@/shared/ui/tag/Tag'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import { connectUrl } from '@/shared/utils/connectUrl'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { GrView } from 'react-icons/gr'

import styles from './PostById.module.scss'

interface Props {
	post: Post | null
	comments: Comment[]
}

const PostById: FC<Props> = ({ post, comments }) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const [anchors, setAnchors] = useState<string[]>([])
	const [activeAnchor, setActiveAnchor] = useState<string>('')

	useEffect(() => {
		if (contentRef.current) {
			const anchorElements = contentRef.current.querySelectorAll('a')
			const extractedAnchors = Array.from(anchorElements)
				.map(anchor => anchor.getAttribute('href') ?? '')
				.filter(href => href.startsWith('#'))
			extractedAnchors.unshift('#intro')
			extractedAnchors.push('#comments')
			setAnchors(extractedAnchors)
		}
	}, [])

	useEffect(() => {
		if (typeof window === 'undefined') return

		const sections = anchors
			.map(anchor => document.querySelector(anchor) as HTMLElement)
			.filter((section): section is HTMLElement => !!section)

		const observer = new IntersectionObserver(
			entries => {
				const visibleSections = entries
					.filter(entry => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)

				if (visibleSections.length > 0) {
					const mostVisibleSection = visibleSections[0].target.id
					setActiveAnchor(`#${mostVisibleSection}`)
				}
			},
			{
				threshold: [0.25, 0.5, 0.75],
				rootMargin: '-20% 0px -20% 0px'
			}
		)

		sections.forEach(section => observer.observe(section))

		return () => {
			sections.forEach(section => observer.unobserve(section))
		}
	}, [anchors])

	return (
		<SideBar
			CommonComponent={() => (
				<nav className={styles.navContainer}>
					<div className={styles.nav}>
						<ul>
							{anchors.map((anchor, index) => (
								<li
									key={index}
									className={activeAnchor === anchor ? styles.activeLi : ''}
								>
									<a href={anchor}>{anchor.replace('#', '')}</a>
								</li>
							))}
						</ul>
					</div>
				</nav>
			)}
		>
			<div className={styles.layout}>
				<div className={styles.postById} id='intro'>
					<div className={styles.path}>
						<Link href={LINKS.BLOG} className={styles.item}>
							Blog
						</Link>{' '}
						<Link
							href={connectUrl(LINKS.BLOG, '/', post?.tag?.name || '')}
							className={styles.item}
						>
							{post?.tag?.name}
						</Link>
						<div className={styles.item}>{post?.title}</div>
					</div>
					<div className={styles.heading}>
						<Tag> {post?.tag?.name}</Tag>
						<ActionPost post={post as Post} />
					</div>
					<h1 className={styles.title}>{post?.title}</h1>
					<div className={styles.detalis}>
						<div className={styles.flex}>
							<MiniAuthor author={post?.author} />
							<p className={styles.date}>August 20, 2022</p>
						</div>
						<div className={styles.views}>
							<GrView />
							<p>{post?.viewCount}</p>
						</div>
					</div>

					<Image
						src={addFullUrl(post?.cover || '')}
						loader={() => addFullUrl(post?.cover || '')}
						alt='post'
						width={1600}
						height={1000}
					/>
					<div ref={contentRef} className={styles.content} id='content'>
						{parse(post?.content || '')}
					</div>
				</div>
				<Comments postId={post?.id || 0} comments={comments} />
			</div>
		</SideBar>
	)
}

export default PostById

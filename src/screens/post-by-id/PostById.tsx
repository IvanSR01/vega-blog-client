'use client'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './PostById.module.scss'
import Image from 'next/image'
import Tag from '@/shared/ui/tag/Tag'
import MiniAuthor from '@/components/mini-author/MiniAuthor'
import Comments from '@/components/comments/Comments'
import { GrView } from 'react-icons/gr'
import SideBar from '@/components/side-bar/SideBar'
import Link from 'next/link'
import { Post } from '@/shared/interfaces/post.interface'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import parse from 'html-react-parser'
import { Comment } from '@/shared/interfaces/comment.interface'

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
				// Фильтруем видимые секции
				const visibleSections = entries
					.filter(entry => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio) // Сортируем по степени видимости

				if (visibleSections.length > 0) {
					// Берем наиболее видимую секцию
					const mostVisibleSection = visibleSections[0].target.id
					setActiveAnchor(`#${mostVisibleSection}`)
				}
			},
			{
				threshold: [0.25, 0.5, 0.75], // Проверяем несколько уровней видимости
				rootMargin: '-20% 0px -20% 0px' // Предотвращает срабатывание на границе
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
				<nav className={styles.nav__container}>
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
				<div className={styles.post__by__id} id='intro'>
					<div className={styles.path}>
						<Link href={'/blog'} className={styles.item}>
							Blog
						</Link>{' '}
						<Link href={'/blog/technology'} className={styles.item}>
							{post?.tag?.name}
						</Link>
						<div className={styles.item}>{post?.title}</div>
					</div>
					<Tag> {post?.tag?.name}</Tag>
					<h1 className={styles.title}>{post?.title}</h1>
					<div className={styles.detalis}>
						<div className={styles.flex}>
							<MiniAuthor author={post?.author}/>
							<p className={styles.date}>August 20, 2022</p>
						</div>
						<div className={styles.views}>
							<GrView />
							<p>20</p>
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
				<Comments postId={post?.id || 0} comments={comments}/>
			</div>
		</SideBar>
	)
}

export default PostById

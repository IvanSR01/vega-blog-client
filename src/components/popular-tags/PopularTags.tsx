'use client'

import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import { LINKS } from '@/shared/constants/links'
import { popularTags } from '@/shared/constants/tags'
import { Tag as TagType } from '@/shared/interfaces/tag.interface'
import Tag from '@/shared/ui/tag/Tag'
import { connectUrl } from '@/shared/utils/connectUrl'
import { parseTag, unParseTag } from '@/shared/utils/tag.utils'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { FC } from 'react'

import styles from './PopularTags.module.scss'

interface Props {
	tags: TagType[] | undefined
}

const PopularTags: FC<Props> = ({ tags }) => {
	const parmas = useParams()
	const searchParams = useSearchParams()
	return (
		<div className={styles.popular}>
			<h3>Most Search Tags : </h3>
			<ScrollLayout width='70%'>
				{tags && tags.length ? (
					<div className={styles.tags}>
						{tags.map(item => (
							<Link
								href={connectUrl(
									LINKS.BLOG,
									'/',
									parseTag(item.name),
									'?',
									searchParams?.toString()
								)}
								key={item.id}
							>
								<Tag
									isAltStyle={
										item.name !== unParseTag((parmas.tag as string) || '')
									}
								>
									{item.name}
								</Tag>
							</Link>
						))}
					</div>
				) : (
					<div className={styles.tags}>
						{popularTags.map((item: string) => (
							<Link href={connectUrl(LINKS.BLOG, '/', item)} key={item}>
								<Tag isAltStyle>{item}</Tag>
							</Link>
						))}
					</div>
				)}
			</ScrollLayout>
		</div>
	)
}

export default PopularTags

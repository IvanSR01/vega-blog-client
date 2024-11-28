'use client'
import { FC } from 'react'
import styles from './PopularTags.module.scss'
import Tag from '@/shared/ui/tag/Tag'
import { popularTags } from '@/shared/constants/tags'
import Link from 'next/link'
import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import { Tag as TagType } from '@/shared/interfaces/tag.interface'
import { useParams } from 'next/navigation'
import { cleanTag } from '@/shared/utils/cleanTag'

interface Props {
	tags: TagType[]
}

const PopularTags: FC<Props> = ({ tags }) => {
	const parmas = useParams()
	return (
		<div className={styles.popular}>
			<h3>Most Search Tags : </h3>
			<ScrollLayout width='70%'>
				{tags && tags.length ? (
					<div className={styles.tags}>
						{tags.map(item => (
							<Link href={'/blog' + '/' + item.name} key={item.id}>
								<Tag isAltStyle={item.name !== cleanTag((parmas.tag as string) || '')}>{item.name}</Tag>
							</Link>
						))}
					</div>
				) : (
					<div className={styles.tags}>
						{popularTags.map((item: string) => (
							<Link href={'/blog' + '/' + item} key={item}>
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

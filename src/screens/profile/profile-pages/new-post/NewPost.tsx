'use client'
import tagService from '@/services/tag-service/tag.service'
import { LINKS } from '@/shared/constants/links'
import Button from '@/shared/ui/button/Button'
import Input from '@/shared/ui/input/Input'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import Select from 'react-select'
import styles from './NewPost.module.scss'
import { useNewPost } from './useNewPost'
import { reactSelectStyles } from '@/shared/constants/react-select.styles'

const NewPost = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const { data } = useQuery({
		queryKey: ['tags'],
		queryFn: () => tagService.getTags()
	})
	const { post, changeData, mutate, upload } = useNewPost()
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Link href={LINKS.AUTHOR_PROFILE} className={styles.back}>
					<BsArrowLeft />
					<p>Back to Profile</p>
				</Link>
				<p>Title :</p>
				<Input
					placeholder='Write your title'
					value={post.title}
					onChange={(v: any) => changeData('title', v.target.value)}
				/>
				<p>Image : </p>
				<input
					onChange={(e: any) => upload(e.target.files[0])}
					type='file'
					ref={inputRef}
					accept='image/*'
					hidden
				/>
				{post.cover ? (
					<div className={styles.image}>
						<Image
							src={addFullUrl(post.cover)}
							loader={() => addFullUrl(post.cover)}
							width={200}
							height={200}
							alt='ew'
						/>
						<div className={styles.clear} onClick={() => changeData('cover', '')}>
							<FaTrash />
						</div>
					</div>
				) : (
					<Button onClick={() => inputRef?.current?.click()}>
						Upload image
					</Button>
				)}
				<p>Tag :</p>
				<Select
					options={data?.map(tag => ({ value: tag.id, label: tag.name })) || []}
					value={data
						?.map(tag => ({ value: tag.id, label: tag.name }))
						.find(tag => tag.label === post.tag)}
					onChange={v => changeData('tag', v ? v.label : '')}
					className={styles.select}
					placeholder='Select a tag...'
					styles={reactSelectStyles}
				/>

				<p>Content :</p>
				<ReactQuill
					placeholder='Write something...'
					value={post.content}
					onChange={v => changeData('content', v)}
					className={styles.editor}
				/>
				<Button onClick={() => mutate()}>Save</Button>
			</div>
		</div>
	)
}

export default NewPost

'use client'

import PopularTags from '@/components/popular-tags/PopularTags'
import { useSearchQuery } from '@/hooks/useSearchQuery'
import tagService from '@/services/tag-service/tag.service'
import { sortOptions } from '@/shared/constants/sort.options'
import { itemVariants } from '@/shared/motion/variants'
import Input from '@/shared/ui/input/Input'
import CustomSelect from '@/shared/ui/select/Select'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { FaSearch } from 'react-icons/fa'

import styles from './Search.module.scss'

const SearchForm: FC = () => {
	const { searchTerm, handleChangeSearchTerm: handleSearchTermChange } =
		useSearchQuery({
			queryParam: 'search'
		})

	const { searchTerm: sortTerm, handleChangeSearchTerm: handleSortTermChange } =
		useSearchQuery({
			queryParam: 'sort'
		})

	const { data: tags } = useQuery({
		queryKey: ['tags'],
		queryFn: () => tagService.getTags(10)
	})

	return (
		<motion.div
			variants={itemVariants}
			initial='init'
			animate={'animate'}
			exit={'exit'}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.5
			}}
			className={styles.search}
		>
			<div className={styles.top}>
				<Input
					placeholder='Search...'
					icon={<FaSearch />}
					value={searchTerm}
					onChange={(e: any) => handleSearchTermChange(e.target.value)}
					style={{ marginBottom: '20px' }}
				/>
				<CustomSelect
					options={sortOptions}
					value={
						sortOptions.find(option => option.value === sortTerm)?.value || ''
					}
					onChange={value => {
						handleSortTermChange(value)
					}}
					placeholder='Select an option'
				/>
			</div>
			<PopularTags tags={tags || []} />
		</motion.div>
	)
}

export default SearchForm

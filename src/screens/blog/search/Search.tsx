'use client'
import { FC } from 'react'
import styles from './Search.module.scss'
import Input from '@/shared/ui/input/Input'
import CustomSelect from '@/shared/ui/select/Select'
import { FaSearch } from 'react-icons/fa'
import { useSearchQuery } from '@/hooks/useSearchQuery'
import { sortOptions } from '@/shared/constants/sort.options'
import PopularTags from '@/components/popular-tags/PopularTags'
import { Tag } from '@/shared/interfaces/tag.interface'
import { motion } from 'framer-motion'
import { itemVariants } from '@/shared/motion/variants'
interface Props {
	tags: Tag[]
}

const SearchForm: FC<Props> = ({ tags }) => {
	const { searchTerm, handleChangeSearchTerm: handleSearchTermChange } =
		useSearchQuery({
			queryParam: 'search'
		})

	const { searchTerm: sortTerm, handleChangeSearchTerm: handleSortTermChange } =
		useSearchQuery({
			queryParam: 'sort'
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
			<PopularTags tags={tags} />
		</motion.div>
	)
}

export default SearchForm

'use client'
import More from '@/components/more/More'
import { useSearchQuery } from '@/hooks/useSearchQuery'
import { FC } from 'react'

const MorePost: FC = () => {
	const { handleChangeSearchTerm, searchTerm } = useSearchQuery({
		queryParam: 'limit',
		disabledScroll: true
	})

	const onClick = () => {
		if (searchTerm) handleChangeSearchTerm(`${+searchTerm + 5}`)
		else handleChangeSearchTerm('15')
	}

	return <More onClick={onClick} />
}

export default MorePost

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { connectUrl } from '@/shared/utils/connectUrl'

interface Props {
	queryParam: string
	timeout?: number
	disabledScroll?: boolean
}

interface Return {
	searchTerm: string
	handleChangeSearchTerm: (term: string) => void
}

export const useSearchQuery = ({
	queryParam,
	timeout = 500,
	disabledScroll
}: Props): Return => {
	const searchParams = useSearchParams()
	const currentPathname = usePathname()
	const router = useRouter()
	const [searchTerm, setSearchTerm] = useState<string>(
		searchParams.get(queryParam) ?? ''
	)

	const debouncedSearch = useCallback(
		debounce((queryParam: string, term: string) => {
			const params = new URLSearchParams(searchParams.toString())

			if (term) {
				params.set(queryParam, term)
			} else {
				params.delete(queryParam)
			}

			router.replace(connectUrl(currentPathname, '?', params?.toString()), {
				scroll: !disabledScroll
			})
		}, timeout),
		[searchParams, currentPathname, router]
	)

	const handleChangeSearchTerm = useCallback(
		(term: string) => {
			setSearchTerm(term)
			debouncedSearch(queryParam, term)
		},
		[debouncedSearch, queryParam]
	)

	return useMemo(
		() => ({
			searchTerm,
			handleChangeSearchTerm
		}),
		[searchTerm, handleChangeSearchTerm]
	)
}

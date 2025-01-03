import SearchForm from '@/components/search/Search'
import { FC, PropsWithChildren, Suspense } from 'react'

import styles from './BlogLayout.module.scss'

const BlogLayout: FC<PropsWithChildren> = ({children}) => {
	return (
		<div className={styles.blogLayout}>
			<Suspense>
				<SearchForm />
			</Suspense>
			{children}
		</div>
	)
}
export default BlogLayout

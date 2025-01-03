import Layout from '@/components/layouts/layout/Layout'
import NotFound from '@/screens/not-found/NotFound'
import type { NextPage } from 'next'

const NotFoundPage: NextPage = () => {
	return (
		<Layout>
			<NotFound />
		</Layout>
	)
}
export default NotFoundPage

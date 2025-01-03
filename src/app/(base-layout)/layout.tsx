import Layout from '@/components/layouts/layout/Layout'
import { PropsWithChildren } from 'react'


export default function BaseLayout({ children }: PropsWithChildren) {
	return <Layout>{children}</Layout>
}

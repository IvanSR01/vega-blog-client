import BlogLayout from '@/components/layouts/blog-layout/BlogLayout'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
	return <BlogLayout>{children}</BlogLayout>
}

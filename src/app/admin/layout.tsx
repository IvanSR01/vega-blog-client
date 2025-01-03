import AdminLayout from '@/components/layouts/admin-layout/AdminLayout'

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AdminLayout>{children}</AdminLayout>
}

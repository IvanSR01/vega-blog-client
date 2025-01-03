'use client'
import store from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'
import ThemeProvider from './ThemeProvider'

export const queryClient = new QueryClient()

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/workers/sw.js')
				.then((registration) => {
					console.log(
						'Service Worker registered with scope:',
						registration.scope
					)
				})
				.catch((error) => {
					console.error('Service Worker registration failed:', error)
				})
		}
	}, [])
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>{children}</ThemeProvider>
			</QueryClientProvider>
		</Provider>
	)
}
export default AppProvider

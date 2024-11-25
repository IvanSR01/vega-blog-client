'use client'
import { FC, PropsWithChildren } from 'react'
import ThemeProvider from './ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from '@/store/store'

export const queryClient = new QueryClient()

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>{children}</ThemeProvider>
			</QueryClientProvider>
		</Provider>
	)
}
export default AppProvider

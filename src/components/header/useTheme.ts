/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ThemeContext } from '@/providers/ThemeProvider'
import { getLocalStorage, setLocalStorage } from '@/shared/local/local'
import { useContext, useMemo, useState } from 'react'

export default function useTheme() {
	const { setTheme } = useContext(ThemeContext)
	const [checked, setChecked] = useState<boolean>(
		getLocalStorage('theme') === 'dark'
	)
	const toggleTheme = (checked: boolean) => {
		setChecked(checked)
		if (!checked) {
			setTheme && setTheme('light')
			return setLocalStorage('theme', 'light')
		} else {
			setTheme && setTheme('dark')
			return setLocalStorage('theme', 'dark')
		}
	}

	return useMemo(() => ({ checked, toggleTheme }), [checked])
}

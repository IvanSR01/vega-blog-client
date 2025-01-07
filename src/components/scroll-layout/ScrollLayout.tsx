import { CSSProperties, FC, PropsWithChildren } from 'react'

import styles from './ScrollLayout.module.scss'

const ScrollLayout: FC<
	PropsWithChildren<{
		style?: CSSProperties
		ref?: any
	}>
> = ({ children, style, ref }) => {
	return (
		<div className={styles.scroll} style={style} ref={ref}>
			{children}
		</div>
	)
}
export default ScrollLayout

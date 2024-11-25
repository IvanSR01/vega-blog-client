import { PropsWithChildren, forwardRef } from 'react'
import styles from './Tag.module.scss'
import { TagProps } from './Tag-type'
import clsx from 'clsx'

const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(
	(
		{
			isAltStyle = false,
			children,
			...rest
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				className={clsx(styles.tag, {
					[styles.altStyle]: isAltStyle,
				})}
				{...rest}
			>
				{children}
			</div>
		)
	}
)

Tag.displayName = 'Tag'

export default Tag

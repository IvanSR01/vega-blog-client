import { ChangeEventHandler, TextareaHTMLAttributes } from "react"

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	onChange?: ChangeEventHandler<HTMLTextAreaElement>
	value?: string
	placeholder?: string
	helperText?: string
	error?: boolean
	pending?: boolean
	rows?: number
	maxLength?: number
	style?: React.CSSProperties
}

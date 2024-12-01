import { Input } from "@/screens/auth/auth.data"

export type FormProps = {
	isPending: boolean
	inputData: Input[]
	onSubmit: any
	button: string
	defaultValues?: any
}

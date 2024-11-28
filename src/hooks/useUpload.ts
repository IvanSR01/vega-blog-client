import fileService from '@/services/file-service/file.service'
import { FileResponse } from '@/shared/types/file.type'
import { useMemo, useState } from 'react'

export const useUpload = () => {
	const [file, setFile] = useState<FileResponse | null>(null)
	const upload = async (file: File) => {
		const res = await fileService.uploadFile(file, 'image/post')
		setFile(res)
	}

	const clearFile = () => setFile(null)

	return useMemo(
		() => ({
			file,
			upload,
			clearFile
		}),
		[file, upload]
	)
}

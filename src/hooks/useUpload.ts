import fileService from '@/services/file-service/file.service'
import { FileResponse } from '@/shared/types/file.type'
import { useMemo } from 'react'

export const useUpload = (setFile: (file: FileResponse | null) => void) => {
	const upload = async (file: File) => {
		const res = await fileService.uploadFile(file, 'image/post')
		setFile(res)
	}

	const clearFile = () => setFile(null)

	return useMemo(
		() => ({
			upload,
			clearFile
		}),
		[upload]
	)
}

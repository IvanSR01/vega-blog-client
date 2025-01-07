import { useRef } from 'react'

export const useScroll = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const itemRef = useRef<HTMLDivElement | null>(null)
	
	const handleScroll = (to: 'left' | 'right') => {
		if (containerRef.current && itemRef.current) {
			const scrollAmount = itemRef.current.clientWidth + 20

			containerRef.current.scrollBy({
				left: to === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth'
			})
		}
	}

	const onLoadScroll = () => {
		if (containerRef.current && itemRef.current) {
			containerRef.current.scrollLeft = (itemRef.current?.clientWidth + 20) * 2
		}
	}

	return { containerRef, itemRef, handleScroll, onLoadScroll }
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { LINKS } from './shared/constants/links'

export function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get('refresh-token')
	const isProfilePage = request.nextUrl.pathname.includes('/profile')

	if (!refreshToken && isProfilePage) {
		return NextResponse.redirect(new URL(LINKS.AUTH_SING_IN, request.url))
	}

	if (refreshToken && !isProfilePage) {
		return NextResponse.redirect(new URL(LINKS.PROFILE, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/profile/:path*', '/auth/:path*', '/admin']
}

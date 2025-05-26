import { updateSession } from './src/app/utils/supabase/middleware.js'

export async function middleware(request) {
	return await updateSession(request)
}

export const config = {
	matcher: ['/:path*'],
}

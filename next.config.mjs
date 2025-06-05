/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: '3mb',
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'helkjnslabfqrcyuylyl.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/**',
			},
		],
		unoptimized: true,
	},
}

export default nextConfig

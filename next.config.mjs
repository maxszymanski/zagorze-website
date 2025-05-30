/** @type {import('next').NextConfig} */
const nextConfig = {
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

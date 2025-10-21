/** @type {import('next').NextConfig} */
const nextConfig = {
	// Optymalizacje wydajności
	compress: true,
	poweredByHeader: false,

	// Optymalizacja obrazów
	images: {
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 60,
	},

	// Optymalizacja CSS - wyłączone z powodu problemów z critters na Vercel
	// experimental: {
	// 	optimizeCss: true,
	// },

	// Optymalizacja JavaScript
	swcMinify: true,

	// Optymalizacja bundle
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			}
		}
		return config
	},
}

export default nextConfig

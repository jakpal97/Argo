export default function robots() {
	const baseUrl = 'https://argo-system.pl'

	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/lib/','/wycena/dziekujemy'],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}

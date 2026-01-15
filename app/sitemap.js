export default function sitemap() {
	const baseUrl = 'https://argo-system.pl'
	const currentDate = new Date().toISOString()

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${baseUrl}/kontakt`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/uslugi/audyty`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/uslugi/fm`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/uslugi/maszyny`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/polityka-prywatnosci`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/regulamin`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	]
}

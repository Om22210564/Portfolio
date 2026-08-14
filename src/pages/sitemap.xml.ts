export function GET() {
	const siteURL = 'https://om22210564.github.io/Portfolio/';
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteURL}</loc></url>
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' },
	});
}

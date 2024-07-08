import 'dotenv/config';

export async function GET() {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${process.env.URL}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
        </urlset>`.trim(),
		{
			headers: {
				'Cache-Control': 'max-age=0, s-maxage=86400',
				'Content-Type': 'application/xml'
			}
		}
	);
}

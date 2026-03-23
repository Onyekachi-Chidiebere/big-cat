import { NextResponse } from 'next/server';
import { htmlForRoute } from '../lib/htmlSource';

type Params = { slug?: string[] };

export async function GET(
  _request: Request,
  context: { params: Promise<Params> | Params }
) {
  const params = await context.params;
  const segments = params?.slug ?? [];
  const routePath = `/${segments.join('/')}`;

  const html = await htmlForRoute(routePath);
  if (!html) {
    return new NextResponse('Not found', { status: 404 });
  }

  return new NextResponse(html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

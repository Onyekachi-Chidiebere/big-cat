import { NextResponse } from 'next/server';
import { htmlForRoute } from './lib/htmlSource';

export async function GET() {
  const html = await htmlForRoute('/');
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

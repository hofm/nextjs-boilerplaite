import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const news = await prismadb.news.findMany();

    return NextResponse.json(news);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { content } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!content) {
      return new NextResponse('Content is required', { status: 400 });
    }

    const news = await prismadb.news.create({
      data: {
        content,
        userId,
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}

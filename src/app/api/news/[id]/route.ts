// app/api/news/[id]/route.ts
import { convertBigIntToString } from "@/utils/json";
import prisma from "@/utils/prisma";
import {NextResponse } from "next/server";

export async function GET(rrequest: Request,
  {params}: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newsById = await prisma.news.findUnique({
      where: {
        id: parseInt(id),
        deleted_at: null,
        is_published: true
      },
      include: {
        news_blocks: {
          orderBy: { order: 'asc' },
          include: {
            news_block_images: {
              orderBy: { order: 'asc' },
              include: {
                image: true,
              },
            },
          },
        },
      },
    });
    const data = convertBigIntToString(newsById);

    if (!data) {
      return new Response(JSON.stringify({ error: 'News not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return NextResponse.json({
          data: data,
        });
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch news' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

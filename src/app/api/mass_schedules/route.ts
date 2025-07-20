import { convertBigIntToString } from "@/utils/json";
import prisma from "../../../utils/prisma";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    if (page < 1 || limit < 1) {
      return NextResponse.json(
        { error: "Page và limit phải là số nguyên dương" },
        { status: 400 }
      );
    }

    const total = await prisma.massSchedules.count({
      where: {
        deleted_at: null,
      },
    });
    const data = await prisma.massSchedules.findMany({
      where: {
        deleted_at: null,
      },
      skip,
      take: limit,
      orderBy: {
        created_at: "desc",
      }
    });

    const items = convertBigIntToString(data);

    return NextResponse.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: items,
    });
  } catch (error) {
    console.error("API news error:", error);
    return NextResponse.json(
      { error: "Lỗi khi lấy dữ liệu news" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const { uuid } = params;

    const res = await fetch(
      `${process.env.BASE_ISHOP_API_URL}/products/${uuid}`
    );

    const data = await res.json();
    console.log("DATA DETAIL:", data);

    if (res.ok) {
      return NextResponse.json({
        success: true,
        data,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch product detail",
      },
      { status: res.status }
    );
  } catch (err) {
    console.error("ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}
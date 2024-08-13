import Keychains from "./../../../_assets/products/keychains.png";
import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/app/_types/product";

export async function GET(req: NextRequest, { params }: any): Promise<NextResponse> {
  const { category } = params;

  // get length from searchParams defaults to 5
  const url = new URL(req.url);
  const length = parseInt(url.searchParams.get("length") || "5", 10);

  try {
    // build product array
    const products: Product[] = Array.from({ length }, (_, index) => ({
      id: `${category}${index}`,
      thumbnail: Keychains,
      title: `${category} ${index + 1}`,
      price: 200,
      isSoldOut: false,
      link: `shop/${category}/${category}${index}`,
    }));

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong", message: error }, { status: 400 });
  }
}

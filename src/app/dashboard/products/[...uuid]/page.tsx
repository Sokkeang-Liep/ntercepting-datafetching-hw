
import { fetchDetail } from "../../@products/products/(..)products/[uuid]/page";
import ProductDetailComponent from "@/components/products/ProductDetailComponent";
import { ProductType } from "@/lib/product-type/product";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ uuid: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const uuid = (await params)?.uuid;

  // fetch post information
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL}/products/${uuid}`,
  ).then((res) => res.json());

  return {
    title: post?.name,
    description: post.description,
    openGraph: {
      images: post?.thumbnail,
    },
  };
}
export default async function ProductDetailPage({
 params, searchParams
}: Props){
  const uuid = (await params)?.uuid;
  
  return (
    <div>
      Product : {uuid}
    </div>
  )
}
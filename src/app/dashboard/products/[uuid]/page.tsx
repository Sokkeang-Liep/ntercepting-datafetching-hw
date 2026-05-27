

import ProductDetailComponent from "@/components/products/ProductDetailComponent";


import { ProductType } from "@/lib/product-type/product";
import { fetchDetail } from "../../@products/products/(..)products/[uuid]/page";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data: ProductType = await fetchDetail(uuid);

  return <ProductDetailComponent data={data} />;
}

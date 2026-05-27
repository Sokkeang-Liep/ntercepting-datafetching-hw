
import { ProductType } from "@/lib/product-type/product";
import React from "react";
import Image from "next/image";

export default function ProductDetailComponent({
  data,
}: {
  data: ProductType;
}) {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Product Detail</h1>
        </div>
        <div className="grid gap-6 rounded-2xl bg-white p-6  md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src={data?.thumbnail || ""}
                alt={data?.name || "product image"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4">
            
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-green-600">
                ${data?.priceOut}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Edit Product
              </button>

              <button className="w-full rounded-lg border px-4 py-2 hover:bg-gray-100">
                Back
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 ">
          <h3 className="mb-4 text-lg font-semibold">Product Information</h3>

          <div className="grid gap-4 text-sm text-gray-600 md:grid-cols-2">
            <div>
              <p className="text-gray-400">UUID</p>
              <p>{data?.uuid}</p>
            </div>

            <div>
              <p className="text-gray-400">Name</p>
              <p>{data?.name}</p>
            </div>

            <div>
              <p className="text-gray-400">Price</p>
              <p>${data?.priceOut}</p>
            </div>

            <div>
              <p className="text-gray-400">Status</p>
              <p className="text-green-600">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

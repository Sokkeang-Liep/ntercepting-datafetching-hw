import React, { Suspense } from "react";
import { AsideComponentDashboard } from "@/components/dashboard/AsideComponentDashboard";
import LoadingDashboard from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My dashboard',
  description: 'This dashboad handle all internal process background. ',
  openGraph: {
    images: ['https://res.cloudinary.com/cloudinary-marketing/images/f_auto,q_auto/v1688152741/Blog-video-thumbnails-nextjs/Blog-video-thumbnails-nextjs.png']
  }
}

export default function DashBoardLayout({
    children,
    products,
    blogs,
    setting
}: {
    children: React.ReactNode,
    products: React.ReactNode,
    blogs: React.ReactNode,
    setting: React.ReactNode
}) {
    return (
        
        <section className="grid grid-cols-4 gap-5">
            <Suspense fallback= {<LoadingDashboard/>}>
                <AsideComponentDashboard/>
            {/* render component as slot */}
            <section className="grid col-span-3">
                <div className="bg-green-300 p-8">{children}</div>
                {/* slot products  */}
                <div className="bg-blue-500 p-8">{products}</div>
                {/* slot blog */}
                <div className="bg-red-300 p-8">{blogs}</div>
                {/* slot setting */}
                <div className="bg-yellow-200 p-8">{setting}</div>
            </section>
            </Suspense>
            
        </section>

    )
}
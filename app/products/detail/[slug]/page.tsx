"use client";

import Footer from "@/components/Footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems, productItems } from "@/data";
import Link from "next/link";

const Home = ({ params }: { params: { slug: number } }) => {
  const product = productItems[params.slug];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} chosenItem={navItems[0].name} />
        <div className="pb-28 pt-40 w-full">
          <div  id="overview" className="flex flex-col md:flex-row lg:flex-row gap-x-16">
            <div className="flex flex-col max-w-[100vw] md:max-w-[45vw] lg:max-w-[45vw] ">
              <img src="/drum1.jpg" className="flex-1 rounded-3xl object-cover" />
            </div>
            <div className="flex flex-col gap-y-10 flex-grow items-end divide-y divide-gray-600">
              <h1 className="justify-center text-3xl w-full">{product.title}</h1>
              <div className="justify-center w-full">
                <h1 className="justify-center text-1xl w-full text-gray-500">Color</h1>
                <h1 className="justify-center text-1xl w-full pt-5">Materials {product.materials}</h1>
              </div>
              <div className="justify-center w-full">
                <h1 className="justify-center text-1xl w-full text-gray-500">Materials</h1>
                <h1 className="justify-center text-1xl w-full pt-5">Color {product.description}</h1>
              </div>
              <div className="justify-center w-full">
                <h1 className="justify-center text-1xl w-full text-gray-500">Price</h1>
                <h1 className="justify-center text-1xl w-full pt-5">Item {product.description}</h1>
              </div>
              <div className="justify-center w-full">
                <h1 className="justify-center text-1xl w-full text-gray-500">Commits</h1>
                <h1 className="justify-center text-1xl w-full pt-5">Comm {product.description}</h1>
              </div>
            </div>
          </div>
          <div id="features" className="pt-36 pb-28 w-full flex flex-col gap-y-6 justify-center items-center">
            <h1 className="text-3xl pb-12">FEATURES</h1>
            {
              product.features!.map((item) => (
                <div className="max-w-screen-lg pb-8">
                  <p className="uppercase text-sm md:text-lg text-gray-200">{item.title}</p>
                  <p className="text-xs md:text-lg text-gray-500 pt-3">{item.content}</p>
                </div>
              ))
            }
          </div>
          <div id="apply" className="pb-28 w-full flex flex-col gap-y-6 justify-center items-center">
            <h1 className="text-3xl pb-12">APPLY</h1>
            {
              product.applies!.map((item) =>(
                <img src={item} className="flex-1 rounded-3xl object-cover"></img>
              ))
            }
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
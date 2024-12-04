"use client";

import Footer from "@/components/Footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems, productItems, projectItems } from "@/data";
import Link from "next/link";

const Home = () => {
    return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} chosenItem={navItems[1].name} />
                <div className="pb-28 pt-28 w-full">
                    <BentoGrid className="w-full py-20">
                        {projectItems.map((item, i) => (
                            <Link  href={`/projects/detail/${item.id}`} className="items-center justify-center">
                                <BentoGridItem
                                    id={item.id}
                                    key={i}
                                    title={item.title}
                                    description={""}
                                    // remove icon prop
                                    // remove original classname condition
                                    className={item.className}
                                    img={item.img}
                                    imgClassName={item.imgClassName}
                                    titleClassName={item.titleClassName}
                                    spareImg={item.spareImg}
                                />
                                <p className="py-10">{item.description}</p>
                            </Link>

                        ))}
                    </BentoGrid>
                </div>

                <Footer />
            </div>
      </main>
    );
  };
  
  export default Home;
"use client";

import Footer from "@/components/Footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems, productItems } from "@/data";
import { log } from "console";
import Link from "next/link";

const aboutus = "Foundational objective for developing this kind of light source is to bestow upon the lighting fixtures a captivating soul and create a dynamic experience. Our ambition is to animate the lighting, diversify the " + 
"color , and enhance the visual effects to better articulate the atmosphere of the space and the moods of its inhabitants. The light source and control mode have been upgraded, from the original single and two-colors to a multi-colors "+
"combination, and from a single lamp head control to a combination control. The light bulbs on the whole lamp is combined into a group by wireless communication, so that the bulb and the bulb can communicate, which can work alone or collectively. "+
"Cooperate with each other and use algorithms to combine various controllable, variable and settable lighting effects, such as sequential color-changing running, the gradient of the rainbow, multi-layers color superposition, etc. Through the "+
"combination with the APP, users can customize the mode and light effect they want at any time, adding infinite colors to our life.";

const Home = () => {

  const handleButton = () => {
    console.log("luo")
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} chosenItem={navItems[2].name} />
        <div className="pb-28 pt-40 w-full">
          <div  id="overview" className="flex flex-col md:flex-row lg:flex-row gap-x-16">
            <div className="flex flex-col flex-1 ">
              <img src="/logo.png" className="flex-1 rounded-3xl object-contain" useMap="#luo"/>
              <map name="luo">
                <area shape="circle" coords="0,0,100" href="" onMouseOver={handleButton}></area>
              </map>
            </div>
            <div className="flex flex-col flex-1 gap-y-10 items-end divide-y divide-gray-600">
              <h1 className="justify-center text-3xl w-full">ABOUT US</h1>
              <div className="justify-center w-full">
                <h1 className="justify-center text-1xl w-full text-gray-500">{aboutus}</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
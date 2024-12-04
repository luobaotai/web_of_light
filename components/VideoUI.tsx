import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Video from 'next-video'
import { cn } from '@/utils/cn'

const VideoUI = () => {
    return (
        <div className="flex flex-col items-center gap-y-16">
            <h1 className="heading lg:max-w-[45vw]">
                Using smart bulbs <span className="text-purple">you</span> can activate your lamps
            </h1>
            <div className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                " relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between",
            )}
                style={{
                    //   add these two
                    //   you can generate the color from here https://cssgradient.io/
                    background: "rgb(4,7,29)",
                    backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}>
                    <Video src={"/v1.mp4"} className='max-w-[65vw]'/>
            </div>


        </div>
    )
}

export default VideoUI
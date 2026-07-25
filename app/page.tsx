
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { BlueTitle, GrayTitle } from "@/components/resuables";
import { Badge } from "@/components/ui/badge";
import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className= "min-h-screen bg-[#0a0a0a] selection:bg-white/20">
      <section className="relative  flex flex-col items-center overflow-hidden px-4 pb-40 pt-40 text-center">
        <HoleBackground  
        strokeColor="rgba(255, 255 , 255 ,0.05)"
        className= "absolute inset-0 h-full w-full "
        style={{
          maskImage: 
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.5 ) 50%, transparent 100%)",
          WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.5 ) 50%, transparent 100%)",
        }}
        />
       <Badge variant={'outline'} className=" p-4 gap-2 backdrop-blur-sm ">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 " />
        Powered by Gemini 3.5 Flash 
       </Badge>
       <h1 className="mx-auto max-w-3xl text-balance font-serif text-5xl leading-tight tracking-tight sm:text-5xl lg:text-7xl z-10">
        <GrayTitle>Forge your dream </GrayTitle>
        <br/>
        <BlueTitle>from a single prompt. </BlueTitle>
       </h1>
       <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/40 z-10">
        Describe what you want to build. AI writes the code , picks the packages , and renders a live preview all inside your browser.
       </p>
      </section>
    </main>
  );
}

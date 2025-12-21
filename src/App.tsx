import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import Footer from "@/sections/Footer";


export const App = () => {
    return (
        <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-black box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
        <div className="box-border caret-transparent">
            <div className="relative content-center items-center bg-black box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden">
                <Navbar />
                <Hero />
                <Footer/>

            </div>
            <div className="box-border caret-transparent"></div>
        </div>
        <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0">
            <img
                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-63.svg"
                alt="Icon"
                className="box-border caret-transparent h-[512px] w-[512px]"
            />
            <img
                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-64.svg"
                alt="Icon"
                className="box-border caret-transparent"
            />
            <img
                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-65.svg"
                alt="Icon"
                className="box-border caret-transparent"
            />
            <img
                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-66.svg"
                alt="Icon"
                className="box-border caret-transparent"
            />
            <img
                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-67.svg"
                alt="Icon"
                className="box-border caret-transparent"
            />
            <img
                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-68.svg"
                alt="Icon"
                className="box-border caret-transparent"
            />
            <img
                src="https://c.animaapp.com/mhrys1hg2q1D6i/assets/icon-69.svg"
                alt="Icon"
                className="box-border caret-transparent"
            />
        </div>
        </div>
    );
};

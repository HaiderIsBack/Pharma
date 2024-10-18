import { gsap } from "gsap";
import { SlideUp } from "../Animations";
import { useEffect, useRef } from "react";

const Transition = () => {
    const textRef = useRef(null);
    const boxRef = useRef(null);
    useEffect(()=>{
        if(window.innerWidth > 1020){
            document.body.classList.add("stop-scrolling");
        }
        const timeline = gsap.timeline();
        timeline.to(textRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 3,
            delay: 3,
            ease: "power4.inOut",
        })
        timeline.to(boxRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 2,
            ease: "power4.inOut",
        });
        timeline.to(boxRef.current, {
            display: "none",
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
                if(window.innerWidth > 1020){
                    document.body.classList.remove("stop-scrolling");
                }
            }
        });
        
    }, []);
    return (
        <div ref={boxRef} className="transition-wrapper fixed top-0 left-0 z-[100] w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-[var(--brand-primary)] to-[var(--brand-primary-dark)]">
            <div ref={textRef} className="transition-wrapper">
                <h1 className="text-white  text-[10vw] select-none font-bold"><SlideUp>DAWAIWALA</SlideUp></h1>
            </div>
        </div>
    )
}

export default Transition;
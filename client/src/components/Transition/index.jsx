import { gsap } from "gsap";
import { SlideUp } from "../Animations";
import { useEffect, useRef } from "react";

const Transition = () => {
    const textRef = useRef(null);
    const boxRef = useRef(null);
    useEffect(()=>{
        document.body.classList.add("stop-scrolling");
        const timeline = gsap.timeline();
        timeline.to(textRef.current, {
            scale: 100,
            duration: 1.5,
            delay: 3,
            ease: "power3.inOut"
        });
        timeline.to(boxRef.current, {
            opacity: 0,
            duration: 1
        });
        timeline.to(boxRef.current, {
            display: "none",
            duration: 1,
            ease: "power3.inOut"
        })
        timeline.to(textRef.current, {
            scale: 100,
            duration: 2,
            ease: "power3.inOut",
            onComplete: () => {
                document.body.classList.remove("stop-scrolling")
            }
        });
    }, []);
    return (
        <div ref={boxRef} className="fixed top-0 left-0 z-[100] w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-[var(--brand-primary)] to-[var(--brand-primary-dark)]">
            <h1 ref={textRef} className="text-white  text-[10vw] select-none font-bold"><SlideUp>GOLI</SlideUp></h1>
        </div>
    )
}

export default Transition;
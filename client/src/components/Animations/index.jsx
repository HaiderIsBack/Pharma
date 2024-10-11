import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

export const SlideDown = ({ children, delay }) => {
    const animRef = useRef(null);

    useEffect(()=>{
        const letters = animRef.current.querySelectorAll("span");
        gsap.to(letters, {
            stagger: 0.09,
            y: 0,
            ease: "power4.inOut",
            duration: 2,
            delay
        })
    }, []);
    return (
        <>
        <div ref={animRef} className="flex overflow-hidden slide-down-anim">
            {typeof children === "string" ? (
                children.split("").map((elem, index) => (
                    <span className="inline-block translate-y-[100%]" key={`${elem}-${index}`}>{elem}</span>
                ))
            ) : (
                children
            )}
        </div>
        </>
    );
}

export const SlideUp = ({ children }) => {
    const animRef = useRef(null);

    useEffect(()=>{
        const letters = animRef.current.querySelectorAll("span");
        gsap.to(letters, {
            stagger: 0.09,
            y: 0,
            ease: "power4.inOut",
            duration: 2
        })
    }, []);
    return (
        <>
        <div ref={animRef} className="flex overflow-hidden">
            {typeof children === "string" ? (
                children.split("").map((elem, index) => (
                    <span className="inline-block translate-y-[-100%]" key={`${elem}-${index}`}>{elem}</span>
                ))
            ) : (
                children
            )}
        </div>
        </>
    );
}

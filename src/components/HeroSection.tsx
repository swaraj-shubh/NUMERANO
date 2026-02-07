import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // ENTRANCE TIMELINE with Scroll Refresh & Continuous Flow
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
            },
            defaults: {
                ease: "cubic-bezier(0.22, 1, 0.36, 1)"
            }
        });

        // BACKGROUND MOTION - Infinite Loop
        gsap.to(bgRef.current, {
            backgroundPosition: "200% 200%",
            duration: 15,
            repeat: -1,
            ease: "none"
        });

        // 1. ENTRANCE PHASE
        tl.from(".hero-line", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15
        })
            .from(".hero-subtitle", {
                y: 20,
                opacity: 0,
                duration: 0.8
            }, "-=0.4")
            .from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, "-=0.4")
            .from(".scroll-indicator", {
                opacity: 0,
                y: 10,
                duration: 0.6
            }, "-=0.2");

        // 2. CONTINUOUS AMBIENT PHASE (The "Go On" Part)
        // We add this to the same timeline so it starts perfectly after entrance
        tl.to(".hero-line, .hero-subtitle", {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: {
                amount: 0.5,
                from: "start"
            }
        }, "-=0.5"); // Overlap slightly with end of entrance

        tl.to(".hero-btn", {
            scale: 1.05,
            boxShadow: "0 0 20px rgba(0, 242, 255, 0.2)",
            duration: 1.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.2
        }, "<"); // Start with the text float

        // EXPLICIT SCROLL SCRUB (Background Parallax Only)
        gsap.to(bgRef.current, {
            y: 100,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".scroll-indicator", {
            opacity: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "top 40%",
                scrub: true
            }
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-numerano-dark flex flex-col justify-center"
        >
            {/* BACKGROUND LAYER - Vivid Navy Gradient */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] bg-[length:300%_300%]"
            ></div>

            {/* OVERLAY LAYER - Subtle */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 to-black/50 pointer-events-none"></div>

            {/* CONTENT LAYER */}
            <div
                ref={textRef}
                className="relative z-20 max-w-[1100px] w-full mx-auto px-6 h-full flex flex-col justify-center"
            >
                {/* HEADLINE */}
                <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-[1.05] text-white">
                    <div className="overflow-hidden py-2">
                        <span className="hero-line block drop-shadow-lg">DECODING THE</span>
                    </div>
                    <div className="overflow-hidden py-2">
                        <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-white via-numerano-neon to-numerano-accent drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                            UNIVERSE
                        </span>
                    </div>
                </h1>

                {/* SUBTITLE */}
                <p className="hero-subtitle mt-6 text-[1.2rem] max-w-[550px] text-gray-100 font-light tracking-wide leading-relaxed">
                    Unlocking the secrets of reality, <span className="text-numerano-neon font-semibold">one number at a time.</span>
                </p>

                {/* CTA GROUP */}
                <div className="flex gap-5 mt-10">
                    <button
                        onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hero-btn px-8 py-4 rounded-full text-[1rem] border-none cursor-pointer transition-all duration-300 ease-out bg-white text-numerano-navy hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] font-bold uppercase tracking-wider relative z-30"
                    >
                        Start Exploration
                    </button>
                    <button
                        onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hero-btn px-8 py-4 rounded-full text-[1rem] border border-white/40 cursor-pointer transition-all duration-300 ease-out bg-transparent text-white hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] font-bold uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 hover:border-numerano-neon relative z-30"
                    >
                        Join Community
                    </button>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-[0.9rem] opacity-70 text-white pointer-events-none animate-bounce">
                ↓ Scroll to Discover
            </div>
        </section>
    );
}

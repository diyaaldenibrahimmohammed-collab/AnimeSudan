import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
    onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
    const [isFinishing, setIsFinishing] = useState(false);

    useEffect(() => {
        // Determine how long the actual logo animation is
        // Wait for the animation to mostly complete, then trigger the fade out
        const timer = setTimeout(() => {
            setIsFinishing(true);
            // Give it time to fade out before completely unmounting
            setTimeout(onFinish, 800);
        }, 2800); // Wait 2.8 seconds before starting the fade out

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            animate={{ opacity: isFinishing ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Background glow effects */}
            <motion.div
                className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <motion.div
                className="absolute w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-3xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.8 }}
                transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
            />

            <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.1, 0.25, 1], // Custom cinematic easing
                }}
            >
                <motion.img
                    src="/anime_sudan_logo.png"
                    alt="Anime Al Sudan Logo"
                    className="w-48 h-auto drop-shadow-2xl md:w-64 lg:w-72"
                    initial={{ filter: "brightness(2) blur(10px)" }}
                    animate={{ filter: "brightness(1) blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <motion.div
                    className="mt-8 overflow-hidden"
                >
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                        أنمي السودان
                    </motion.h1>
                </motion.div>

                <motion.p
                    className="mt-2 text-muted-foreground text-sm md:text-base tracking-widest uppercase font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    مجتمع الأوتاكو السوداني
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

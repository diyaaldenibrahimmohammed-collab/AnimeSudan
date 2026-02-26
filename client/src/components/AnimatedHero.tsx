import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Animated Hero Component
 * Features:
 * - Staggered text animations
 * - Parallax effects
 * - Floating background elements
 * - Smooth transitions
 */

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-5xl md:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                  أنمي السودان
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground"
                variants={itemVariants}
              >
                مجتمع سوداني متحمس لثقافة الأنمي والمانجا، نجمع الأوتاكو السودانيين لمشاركة الشغف والإبداع
              </motion.p>
            </motion.div>

            <motion.div className="flex gap-4" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold group"
                onClick={() =>
                  window.open("https://facebook.com/groups/animealsudan/", "_blank")
                }
              >
                انضم للمجموعة
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                اكتشف المزيد
              </Button>
            </motion.div>

            <motion.div className="flex gap-8 pt-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-2xl font-bold text-accent">10K+</p>
                <p className="text-sm text-muted-foreground">أعضاء نشيطين</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-2xl font-bold text-purple-500">100+</p>
                <p className="text-sm text-muted-foreground">مشاركة يومية</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div
              className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-gradient-to-r from-primary via-purple-500 to-accent p-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10 rounded-xl z-10" />
              <img
                src="/group_wallpaper.jpg"
                alt="Anime Al Sudan"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"
              animate={{
                x: [0, -10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

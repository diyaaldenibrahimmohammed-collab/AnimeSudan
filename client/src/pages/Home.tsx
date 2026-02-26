import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Zap,
  Heart,
  MessageCircle,
  Facebook,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import SquadCarousel from "@/components/SquadCarousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * Home Page - Modern Bold Anime Theme
 * Features:
 * - Advanced Framer Motion animations
 * - Parallax scrolling effects
 * - Staggered animations
 * - Interactive hover effects
 * - Professional design with user images
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex justify-between items-center h-16">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/anime_sudan_logo.png"
              alt="Anime Al Sudan Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              أنمي السودان
            </span>
          </motion.div>
          <div className="hidden md:flex gap-6 items-center">
            {["عن المجموعة", "المطور", "المجتمع", "تواصل معنا"].map(
              (item, i) => (
                item === "المطور" ? (
                  <Dialog key={i}>
                    <DialogTrigger asChild>
                      <button className="hover:text-accent transition-colors font-medium">
                        {item}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md border-border bg-card">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-right">
                          تواصل مع المطور ضياء الدين
                        </DialogTitle>
                        <DialogDescription className="text-right text-muted-foreground text-sm">
                          مطور مواقع وتطبيقات محترف. تواصل معي لتنفيذ مشروعك القادم عبر الروابط المباشرة:
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4 py-4">
                        <Button
                          className="w-full justify-start h-14 text-lg bg-[#25D366] hover:bg-[#1da851] text-white border-none"
                          onClick={() => window.open("https://wa.me/249112046348", "_blank")}
                        >
                          <MessageCircle className="ml-2 h-6 w-6" />
                          تواصل عبر واتساب
                        </Button>
                        <Button
                          className="w-full justify-start h-14 text-lg bg-[#1877F2] hover:bg-[#166fe5] text-white border-none"
                          onClick={() => window.open("https://www.facebook.com/DiyaAldinKD", "_blank")}
                        >
                          <Facebook className="ml-2 h-6 w-6" />
                          تواصل عبر فيسبوك
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <motion.a
                    key={i}
                    href={`#${item}`}
                    className="hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                )
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden origin-top`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            {["عن المجموعة", "المطور", "المجتمع", "تواصل معنا"].map(
              (item, i) => (
                item === "المطور" ? (
                  <Dialog key={i}>
                    <DialogTrigger asChild>
                      <button className="text-right text-lg font-medium hover:text-accent transition-colors w-full pb-4 border-b border-border/50">
                        {item}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-[90vw] max-w-md border-border bg-card rounded-xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-right">
                          تواصل مع المطور ضياء الدين
                        </DialogTitle>
                        <DialogDescription className="text-right text-muted-foreground text-sm">
                          مطور مواقع وتطبيقات محترف. تواصل معي لتنفيذ مشروعك القادم عبر الروابط المباشرة:
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4 py-4">
                        <Button
                          className="w-full justify-start h-12 text-base md:text-lg bg-[#25D366] hover:bg-[#1da851] text-white border-none"
                          onClick={() => window.open("https://wa.me/249112046348", "_blank")}
                        >
                          <MessageCircle className="ml-2 h-5 w-5" />
                          تواصل عبر واتساب
                        </Button>
                        <Button
                          className="w-full justify-start h-12 text-base md:text-lg bg-[#1877F2] hover:bg-[#166fe5] text-white border-none"
                          onClick={() => window.open("https://www.facebook.com/DiyaAldinKD", "_blank")}
                        >
                          <Facebook className="ml-2 h-5 w-5" />
                          تواصل عبر فيسبوك
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <a
                    key={i}
                    href={`#${item}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-right text-lg hover:text-accent transition-colors pb-4 border-b border-border/50 block w-full"
                  >
                    {item}
                  </a>
                )
              )
            )}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-accent/20 rounded-full blur-3xl"
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
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    أنـمي السـودان
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-muted-foreground"
                  variants={itemVariants}
                >
                  مجتمع سوداني متحمس لثقافة الأنمي والمانجا، نجمع الأوتاكو
                  السودانيين لمشاركة الشغف والإبداع
                </motion.p>
              </motion.div>

              <motion.div className="flex gap-4" variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold group"
                    onClick={() =>
                      window.open(
                        "https://facebook.com/groups/animealsudan/",
                        "_blank"
                      )
                    }
                  >
                    انضم للمجموعة
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    اكتشف المزيد
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div className="flex gap-8 pt-4" variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <p className="text-2xl font-bold text-accent">160K+</p>
                  <p className="text-sm text-muted-foreground"> عضو</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <p className="text-2xl font-bold text-accent">100+</p>
                  <p className="text-sm text-muted-foreground">مشاركة يومية</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-gradient-to-r from-primary to-accent p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 to-accent/10 rounded-xl z-10" />
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
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
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

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                لماذا تنضم إلينا؟
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعة نشطة وحيوية تجمع أفضل محبي الأنمي في السودان
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "مجتمع نشط",
                desc: "أكثر من 50 الف عضو نشيط يشاركون يومياً",
                gradient: "from-primary to-accent",
              },
              {
                icon: Zap,
                title: "محتوى حصري",
                desc: "أخبار حصرية,ميمز,تصاميم وتحديثات يومية عن أحدث الأنمي",
                gradient: "from-primary to-accent",
              },
              {
                icon: Heart,
                title: "شغف مشترك",
                desc: "مكان آمن لمشاركة حبك للأنمي والتواصل",
                gradient: "from-accent to-primary",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20`}
                />
                <motion.div
                  className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)",
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-white h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Showcase */}
      <section id="community" className="py-20 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-gradient-to-r from-accent to-accent to-primary p-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/10 to-primary/10 rounded-xl z-10" />
                <img
                  src="/additional.png"
                  alt="Community Vibes"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6 order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    مجتمع حي ونشـيط
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  نحن مجموعة من الأوتاكو السودانيين الذين يشاركون الشغف بالأنمي
                  والثقافة اليابانية. كل يوم نتبادل الأخبار والآراء والإبداعات
                </p>
              </div>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: MessageCircle,
                    title: "نقاشات يومية",
                    desc: "نقاشات حية ومثيرة حول أحدث الحلقات والمانجا",
                  },
                  {
                    icon: Heart,
                    title: "نظام الفيالق",
                    desc: "انضم إلى فيلقك المفضل وشارك في الأنشطة والفعاليات الحصرية",
                  },
                  {
                    icon: Users,
                    title: "صداقات جديدة",
                    desc: "تكوين صداقات مع أوتاكو آخرين يشاركونك نفس الشغف",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${i === 0
                        ? "from-primary to-accent"
                        : i === 1
                          ? "from-primary to-accent"
                          : "from-accent to-primary"
                        } rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="text-white h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold w-full md:w-auto"
                  onClick={() =>
                    window.open(
                      "https://facebook.com/groups/animealsudan/",
                      "_blank"
                    )
                  }
                >
                  زيارة المجموعة
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Squads Carousel Section */}
      <section id="squads" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative z-10 w-full max-w-full overflow-hidden px-0 sm:px-4 md:px-8 lg:max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-4 md:mb-12 px-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                فيالق أنمي السودان
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تصفح أقوى الفيالق في مجتمعنا، سيتم إضافة التفاصيل الحقيقية قريباً
            </p>
          </motion.div>

          <SquadCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "160K+", label: "عضو مميز" },
              { number: "50K+", label: "أعضاء نشيطين" },
              { number: "100+", label: "مشاركة يومية" },
              { number: "200+", label: "أنمي مناقش" },
              { number: "24/7", label: "نشاط مستمر" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 to-accent/10" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  هل أنت أوتاكو؟
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                انضم إلى أكبر مجموعة أنمي سودانية الآن وكن جزءاً من مجتمع حي
                ومتحمس
              </p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold"
                  onClick={() =>
                    window.open(
                      "https://facebook.com/groups/animealsudan/",
                      "_blank"
                    )
                  }
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  انضم للمجموعة على فيسبوك
                </Button>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  شارك مع صديق
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 relative">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <span className="font-bold">Anime Al Sudan</span>
              </div>
              <p className="text-sm text-muted-foreground">
                مجموعة سودانية متخصصة في الأنمي والثقافة اليابانية
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">الروابط</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    عن المجموعة
                  </a>
                </li>
                <li>
                  <a
                    href="#squads"
                    className="hover:text-accent transition-colors"
                  >
                    المميزات
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    className="hover:text-accent transition-colors"
                  >
                    المجتمع
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تابعنا</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://facebook.com/groups/animealsudan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    فيسبوك
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">الدعم</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://www.facebook.com/mohammed.el.amen.543079" className="hover:text-accent transition-colors">
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/DiyaAldinKD" className="hover:text-accent transition-colors">
                    المطور كيدي
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Anime Al Sudan. جميع الحقوق محفوظة.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              دكتور ستون عمكك
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

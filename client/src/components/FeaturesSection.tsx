import { motion } from "framer-motion";
import { Users, Zap, Heart } from "lucide-react";

/**
 * Features Section Component
 * Features:
 * - Card animations on scroll
 * - Icon animations
 * - Hover effects
 */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Users className="text-white h-6 w-6" />,
    title: "مجتمع نشط",
    description:
      "أكثر من 10 آلاف عضو نشيط يشاركون يومياً في النقاشات والمحتوى",
    gradient: "from-primary to-purple-600",
  },
  {
    icon: <Zap className="text-white h-6 w-6" />,
    title: "محتوى حصري",
    description: "أخبار حصرية وتحديثات يومية عن أحدث الأنمي والمانجا",
    gradient: "from-purple-600 to-accent",
  },
  {
    icon: <Heart className="text-white h-6 w-6" />,
    title: "شغف مشترك",
    description:
      "مكان آمن لمشاركة حبك للأنمي والتواصل مع الأوتاكو الآخرين",
    gradient: "from-accent to-primary",
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
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
            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
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
          {features.map((feature, index) => (
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
                whileHover={{ boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)" }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

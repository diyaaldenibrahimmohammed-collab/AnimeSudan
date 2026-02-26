import * as React from "react";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// بيانات الفيالق (يمكنك إضافة مسار الصورة في imageUrl لاحقاً)
// مثال: imageUrl: "/squads/squad1.png"
const dummySquads = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    name: "فيلق الأنمي " + (i + 1),
    description: "وصف مميز للفيلق سيتم إضافته لاحقاً",
    imageUrl: "", // اترك هذا فارغاً ليظهر نص "قريباً"، أو ضع مسار الصورة هنا
}));

export default function SquadCarousel() {
    return (
        // استخدام pl-4 pr-0 على الجوال لسماح الفيالق بـ "الفيضان" خارج الشاشة يميناً بشكل احترافي
        <div className="w-full relative pl-4 pr-0 md:px-12 py-10">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4 md:-ml-6">
                    {dummySquads.map((squad, index) => (
                        <CarouselItem
                            key={squad.id}
                            // basis-[85%] على الجوال تجعل الكارت الرئيسي يأخذ 85% ويترك 15% للكارت التالي للظهور (Edge peeking)
                            className="pl-4 md:pl-6 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                            <div className="p-1 h-full">
                                <motion.div
                                    className="group relative h-full overflow-hidden rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(252,211,77,0.3)] hover:-translate-y-2 cursor-grab active:cursor-grabbing flex flex-col"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {/* حاوية الصورة مع الحفاظ على نسبة العرض للارتفاع الثابتة الموحدة */}
                                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/80 flex items-center justify-center">

                                        {squad.imageUrl ? (
                                            <img
                                                src={squad.imageUrl}
                                                alt={squad.name}
                                                // استخدام object-cover يضمن أن الصورة ستغطي المساحة بالكامل وستكون متناسقة الحجم دائماً
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary/50 to-accent/50 bg-clip-text text-transparent opacity-50 tracking-widest">
                                                    قريباً
                                                </span>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-background/100 via-background/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />

                                        {/* Content overlay */}
                                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-20 transform transition-transform duration-300 translate-y-0 md:translate-y-4 group-hover:translate-y-0">
                                            <div className="h-1 w-8 md:w-12 bg-accent rounded-full mb-3 md:mb-4 transform origin-left transition-all duration-300 scale-x-100 md:scale-x-50 group-hover:scale-x-100" />
                                            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 drop-shadow-md">
                                                {squad.name}
                                            </h3>
                                            <p className="text-muted-foreground text-[10px] md:text-sm line-clamp-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {squad.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex border-accent text-accent hover:bg-accent hover:text-black -left-6 lg:-left-12 h-12 w-12 shadow-lg z-10 bg-background/50 backdrop-blur-sm" />
                <CarouselNext className="hidden md:flex border-accent text-accent hover:bg-accent hover:text-black -right-6 lg:-right-12 h-12 w-12 shadow-lg z-10 bg-background/50 backdrop-blur-sm" />
            </Carousel>
        </div>
    );
}

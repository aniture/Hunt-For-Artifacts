import { motion } from "framer-motion";
import { Link } from "wouter";
import { QrCode, Gem, MapPin, ArrowRight, Sparkles, Compass } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description: "Aim your camera at a code, and the artifact unlocks instantly with trivia and lore.",
    accent: "from-teal-500/30 to-cyan-500/10",
  },
  {
    icon: Gem,
    title: "Artifact Collection",
    description: "Build a personal cabinet of curiosities. Every find is logged with rich detail.",
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    icon: MapPin,
    title: "Treasure Hunts",
    description: "Follow chained clues across exhibits and locations. Solve them in order to win.",
    accent: "from-amber-500/30 to-orange-500/10",
  },
];

const stats = [
  { value: "1,247", label: "Artifacts catalogued" },
  { value: "23", label: "Active hunts" },
  { value: "892", label: "Hunters this month" },
  { value: "156", label: "Locations" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <AuroraBackground className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              PWA · scan · discover · collect
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hunt the world's
              <span className="gradient-text block mt-1">hidden artifacts</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Scan QR codes around exhibits and venues to unlock artifacts, follow chained
              clues, and build a personal collection of treasures discovered along the way.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/hunts">
                <ShimmerButton data-testid="button-start-hunt" className="h-14 text-base">
                  <Compass className="h-5 w-5" />
                  Start your hunt
                  <ArrowRight className="h-4 w-4" />
                </ShimmerButton>
              </Link>
              <Link href="/scan">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 rounded-full bg-transparent border-white/20 hover:bg-white/5 text-base"
                  data-testid="button-scan-now"
                >
                  <QrCode className="h-5 w-5 mr-2" />
                  Scan a code
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">How it works</div>
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-features-title">
              Designed for the curious
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={cardVariants}>
                  <SpotlightCard innerClassName="p-7 h-full">
                    <div className="flex flex-col h-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-5 ring-1 ring-white/10`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text" data-testid={`text-stat-${s.label.toLowerCase().split(" ")[0]}`}>
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpotlightCard innerClassName="p-10 sm:p-14 text-center">
            <Sparkles className="h-8 w-8 text-amber-300 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to start hunting?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Open the first quest and let the clues guide you. Your discoveries auto-save in
              the browser, so you can pick up where you left off.
            </p>
            <Link href="/hunts">
              <ShimmerButton className="h-12 text-base">
                <Compass className="h-4 w-4" />
                Browse hunts
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>
            </Link>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
};

export default Home;

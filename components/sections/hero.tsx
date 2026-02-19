import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background pt-16 md:pt-20 lg:pt-32">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10 flex flex-col items-center gap-8 px-4 text-center md:px-8">
                <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-secondary-foreground backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                    Accepting new enterprise partners
                    <ChevronRight className="ml-1 h-4 w-4" />
                </div>

                <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    Architecting the <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Intelligent Enterprise
                    </span>
                </h1>

                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Premier consulting for SAP transformations, AWS cloud infrastructure, and AI-driven automation.
                    We build the digital backbone for global industry leaders.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/contact">
                        <Button size="lg" className="h-12 px-8 text-base">
                            Schedule Audit <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                            View Case Studies
                        </Button>
                    </Link>
                </div>

                <div className="mt-16 flex flex-col items-center gap-4 text-sm text-muted-foreground">
                    <p>Trusted by forward-thinking enterprises</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale filter">
                        {/* Placeholders for logos */}
                        <div className="flex items-center gap-2 font-bold text-xl"><div className="h-6 w-6 bg-current rounded-full"></div> Acme Corp</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><div className="h-6 w-6 bg-current rounded-md"></div> GlobalTech</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><div className="h-6 w-6 bg-current rounded-sm"></div> Nexus</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><div className="h-6 w-6 bg-current rounded-full"></div> Stratos</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

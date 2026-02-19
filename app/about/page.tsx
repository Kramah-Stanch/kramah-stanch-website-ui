import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Users, Target, Rocket } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-8 max-w-screen-xl relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-secondary-foreground backdrop-blur-sm mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                            Established 2020
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                            Driving Digital Excellence for the <span className="text-primary">Modern Enterprise</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            We are a team of architects, engineers, and strategists dedicated to building the digital backbone of tomorrow&apos;s industry leaders.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="border-y bg-secondary/10">
                <div className="container mx-auto px-4 md:px-8 max-w-screen-xl py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                To empower organizations with intelligent, scalable, and secure technology solutions that drive sustainable growth and innovation.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                We believe that true digital transformation isn&apos;t just about implementing new software—it&apos;s about reimagining how business is done in a connected world.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-card p-6 rounded-2xl border shadow-sm">
                                <Target className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">Precision</h3>
                                <p className="text-sm text-muted-foreground">Tailored solutions that hit the mark every time.</p>
                            </div>
                            <div className="bg-card p-6 rounded-2xl border shadow-sm">
                                <Rocket className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-bold text-xl mb-2">Speed</h3>
                                <p className="text-sm text-muted-foreground">Rapid deployment without compromising quality.</p>
                            </div>
                            <div className="bg-card p-6 rounded-2xl border shadow-sm col-span-2">
                                <Users className="h-8 w-8 text-blue-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Partnership</h3>
                                <p className="text-sm text-muted-foreground">We work as an extension of your team, not just a vendor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="container mx-auto px-4 md:px-8 max-w-screen-xl py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground text-lg">
                        These principles guide every decision we make and every line of code we write.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Innovation First", desc: "We constantly explore new technologies to keep our clients ahead of the curve." },
                        { title: "Radical Transparency", desc: "No hidden costs, no jargon. Just clear, honest communication." },
                        { title: "Customer Obsession", desc: "Your success is our only metric for success. We go the extra mile, always." }
                    ].map((value, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-muted-foreground">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Placeholder */}
            <div className="bg-secondary/30 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-screen-xl text-center">
                    <h2 className="text-3xl font-bold mb-12">Meet the Experts</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group bg-background rounded-2xl overflow-hidden border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground">
                                    <Users className="h-12 w-12 opacity-20" />
                                </div>
                                <div className="p-4">
                                    <div className="h-4 w-3/4 bg-foreground/10 rounded mb-2 mx-auto group-hover:bg-primary/20 transition-colors" />
                                    <div className="h-3 w-1/2 bg-muted-foreground/20 rounded mx-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 md:px-8 max-w-screen-xl py-16 md:py-24">
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                        Let&apos;s discuss how we can help you achieve your business goals with our expert consulting services.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold">
                            Work With Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

import { Button } from "@/components/ui/button"
import { Database, Cloud, Bot, ArrowUpRight } from "lucide-react"

export function Services() {
    return (
        <section className="bg-secondary/20 py-24">
            <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Comprehensive Digital Solutions
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our expertise spans the critical pillars of modern enterprise technology.
                            We integrate complex systems to drive simplicity and scale.
                        </p>
                    </div>
                    <Button variant="ghost" className="group">
                        Explore all services <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 h-auto lg:h-[600px]">

                    {/* Large Card: SAP */}
                    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-background p-8 md:col-span-2 md:row-span-2 transition-all hover:shadow-lg hover:border-primary/20">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl transition-all group-hover:bg-accent/10" />

                        <div className="z-10 bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <Database className="text-primary h-6 w-6" />
                        </div>

                        <div className="z-10 mt-auto">
                            <h3 className="mb-2 text-2xl font-bold">SAP Center of Excellence</h3>
                            <p className="mb-6 text-muted-foreground">
                                End-to-end S/4HANA transformations, migration strategies, and intelligent ERP management.
                                We ensure your core systems are agile and future-proof.
                            </p>
                            <ul className="mb-6 space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-accent" /> S/4HANA Migration</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-accent" /> Cloud ERP Integration</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-accent" /> SAP BTP Development</li>
                            </ul>
                        </div>
                        {/* Visual placeholder for SAP Dashboard */}
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-slate-100 to-transparent rounded-tl-3xl opacity-50 group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Tall Card: AI */}
                    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-primary text-primary-foreground p-8 md:col-span-1 md:row-span-2 transition-all hover:shadow-lg">
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                        <div className="z-10 bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <Bot className="text-white h-6 w-6" />
                        </div>

                        <div className="z-10 mt-auto">
                            <h3 className="mb-2 text-2xl font-bold">AI & Automation</h3>
                            <p className="text-primary-foreground/80">
                                Unlock the power of Generative AI and Machine Learning to automate workflows and derive actionable insights from your data.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm">GenAI</span>
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm">Predictive Analytics</span>
                            </div>
                        </div>
                    </div>

                    {/* Wide Card: AWS */}
                    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-background p-8 md:col-span-3 lg:col-span-1 transition-all hover:shadow-lg hover:border-primary/20">
                        <div className="z-10 flex flex-col h-full justify-between">
                            <div className="bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                <Cloud className="text-orange-600 h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold">AWS Cloud</h3>
                                <p className="text-sm text-muted-foreground">
                                    Secure, scalable cloud architecture and DevOps implementation.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

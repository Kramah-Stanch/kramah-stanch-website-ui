import { ShieldCheck, Server } from "lucide-react"

export function Trust() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-6">
                            Engineering Trust at Scale
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We don&apos;t just deliver code; we deliver certainty. Our methodologies are rooted in
                            rigorous standards and deep industry expertise.
                        </p>
                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Security First</h3>
                                    <p className="text-sm text-muted-foreground mt-1">ISO 27001 compliant practices with zero-vulnerability promise on all deliverables.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Server className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Enterprise Grade</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Robust, scalable architectures designed to handle millions of transactions.</p>
                                </div>
                            </div>
                            {/* <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">24/7 Expert Support</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Dedicated support teams ensuring your critical systems are always operational.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center rounded-3xl bg-secondary/30 p-8 lg:p-12">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-6 shadow-sm">
                                <span className="text-4xl font-bold text-primary">10+</span>
                                <span className="text-sm text-muted-foreground mt-2">Years Experience</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-6 shadow-sm">
                                <span className="text-4xl font-bold text-primary">50+</span>
                                <span className="text-sm text-muted-foreground mt-2">Global Clients</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-6 shadow-sm col-span-2">
                                <span className="text-4xl font-bold text-primary">100%</span>
                                <span className="text-sm text-muted-foreground mt-2">Project Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

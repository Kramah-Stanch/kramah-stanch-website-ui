import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogPreview() {
    const posts = [
        {
            category: "Cloud Migration",
            title: "Strategies for Seamless SAP S/4HANA Migration on AWS",
            excerpt: "A deep dive into the best practices for minimizing downtime during critical ERP upgrades.",
            date: "Oct 12, 2025",
        },
        {
            category: "Artificial Intelligence",
            title: "Ethical AI: Implementing Governance in Enterprise Models",
            excerpt: "How to ensure your Generative AI solutions are compliant, unbiased, and secure.",
            date: "Sep 28, 2025",
        },
        {
            category: "Infrastructure",
            title: "The Cost of Downtime: Why Resilience Engineering Matters",
            excerpt: "Building fault-tolerant systems that survive region failures and massive traffic spikes.",
            date: "Sep 15, 2025",
        },
    ]

    return (
        <section className="py-24 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Industry Insights
                    </h2>
                    <Link href="/blog" className="hidden sm:flex items-center text-sm font-medium text-primary hover:underline">
                        View all articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post, index) => (
                        <div key={index} className="group flex flex-col justify-between rounded-2xl border bg-background p-6 transition-all hover:shadow-md">
                            <div>
                                <p className="text-xs font-medium text-accent mb-3">{post.category}</p>
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary/80 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="pt-4 border-t flex items-center justify-between mt-4">
                                <span className="text-xs text-muted-foreground">{post.date}</span>
                                <span className="text-xs font-medium text-foreground group-hover:underline">Read Article</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:hidden">
                    <Link href="/blog" className="flex items-center text-sm font-medium text-primary hover:underline">
                        View all articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

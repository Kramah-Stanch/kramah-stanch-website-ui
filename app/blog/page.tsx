import { Button } from "@/components/ui/button"

export default function BlogPage() {
    const posts = [
        {
            category: "Cloud Migration",
            title: "Strategies for Seamless SAP S/4HANA Migration on AWS",
            excerpt: "A deep dive into the best practices for minimizing downtime during critical ERP upgrades. We explore the 5 R's of migration and how to choose the right path for your organization.",
            date: "Oct 12, 2025",
            author: "Priya Sharma, Cloud Architect"
        },
        {
            category: "Artificial Intelligence",
            title: "Ethical AI: Implementing Governance in Enterprise Models",
            excerpt: "How to ensure your Generative AI solutions are compliant, unbiased, and secure. A look at the new regulatory frameworks emerging in 2025.",
            date: "Sep 28, 2025",
            author: "David Chen, AI Lead"
        },
        {
            category: "Infrastructure",
            title: "The Cost of Downtime: Why Resilience Engineering Matters",
            excerpt: "Building fault-tolerant systems that survive region failures and massive traffic spikes. Case studies from recent major outages.",
            date: "Sep 15, 2025",
            author: "Sarah Jones, DevOps Engineer"
        },
        {
            category: "DevOps",
            title: "Automating Compliance in Highly Regulated Industries",
            excerpt: "Using Infrastructure as Code (IaC) to enforce security policies and audit trails automatically in FinTech and Healthcare.",
            date: "Aug 30, 2025",
            author: "Michael Brown, CTO"
        },
        {
            category: "SAP",
            title: "Optimizing SAP Fiori User Experience for Mobile Workforces",
            excerpt: "Improving productivity by designing intuitive mobile interfaces for field service agents using SAP Fiori technologies.",
            date: "Aug 12, 2025",
            author: "Emily Davis, UX Specialist"
        }
    ]

    return (
        <div className="bg-background min-h-screen">
            <div className="bg-secondary/30 py-16 md:py-24 text-center">
                <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">Insights & News</h1>
                    <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
                        Latest thinking on technology, innovation, and enterprise transformation from our experts.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl py-16">
                <div className="grid gap-8 max-w-4xl mx-auto">
                    {posts.map((post, index) => (
                        <article key={index} className="group relative flex flex-col gap-8 rounded-2xl border bg-card p-8 transition-all hover:shadow-lg md:flex-row md:items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{post.category}</span>
                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    <a href="#" className="hover:underline">{post.title}</a>
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{post.author}</span>
                                    <span className="text-sm font-medium text-primary cursor-pointer hover:underline">Read Article &rarr;</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="outline" size="lg">Load More Articles</Button>
                </div>
            </div>
        </div>
    )
}

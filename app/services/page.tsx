import { Database, Cloud, Bot, Code, Shield, BarChart3, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
    const serviceCategories = [
        {
            title: "SAP Transformation",
            description: "As a trusted SAP partner, we guide enterprises through complex migrations and modernizations.",
            icon: Database,
            features: ["S/4HANA Migration", "SAP BTP Development", "SAP Fiori UX Strategy", "Cloud ERP Integration"]
        },
        {
            title: "Cloud Infrastructure",
            description: "Scalable, secure, and cost-effective cloud solutions on AWS and Azure.",
            icon: Cloud,
            features: ["Cloud Architecture Design", "DevOps & CI/CD", "Serverless Computing", "Cloud Security & Compliance"]
        },
        {
            title: "AI & Intelligence",
            description: "Harness the power of data with advanced analytics and generative AI models.",
            icon: Bot,
            features: ["Generative AI Solutions", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
        },
        {
            title: "Custom Engineering",
            description: "Bespoke software solutions tailored to your unique business challenges.",
            icon: Code,
            features: ["Microservices Architecture", "API First Development", "Legacy Modernization", "High-Performance Web Apps"]
        },
        {
            title: "Cybersecurity",
            description: "Protecting your digital assets with enterprise-grade security protocols.",
            icon: Shield,
            features: ["Vulnerability Assessments", "Identity & Access Management", "Threat Detection", "Security Audits"]
        },
        {
            title: "Data Strategy",
            description: "Turning raw data into strategic assets for better decision making.",
            icon: BarChart3,
            features: ["Data Warehousing", "Business Intelligence", "Data Governance", "Big Data Pipelines"]
        }
    ]

    return (
        <div className="bg-background">
            <div className="bg-secondary/30 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6">Our Expertise</h1>
                    <p className="max-w-3xl text-xl text-muted-foreground">
                        We combine deep industry knowledge with cutting-edge technology to deliver solutions that drive real business value.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {serviceCategories.map((service, index) => (
                        <div key={index} className="flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                            <p className="mb-6 text-muted-foreground flex-1">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm font-medium">
                                        <CheckCircle2 className="mr-2 h-4 w-4 text-accent" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-24 rounded-3xl bg-primary p-8 md:p-16 text-center text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                        Let&apos;s discuss how our consulting services can help you achieve your strategic goals.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="h-12 px-8">
                            Get a Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

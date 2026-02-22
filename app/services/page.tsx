import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
    const serviceCategories = [
        {
            title: "SAP Transformation",
            description: "As a trusted SAP partner, we guide enterprises through complex migrations and modernizations.",
            image: "/images/services/sap-transformation.png",
            features: ["S/4HANA Migration", "SAP BTP Development", "SAP Fiori UX Strategy", "Cloud ERP Integration"]
        },
        {
            title: "Cloud Infrastructure",
            description: "Scalable, secure, and cost-effective cloud solutions on AWS and Azure.",
            image: "/images/services/cloud-infrastructure.png",
            features: ["Cloud Architecture Design", "DevOps & CI/CD", "Serverless Computing", "Cloud Security & Compliance"]
        },
        {
            title: "AI & Intelligence",
            description: "Harness the power of data with advanced analytics and generative AI models.",
            image: "/images/services/ai-intelligence.png",
            features: ["Generative AI Solutions", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
        },
        {
            title: "Custom Engineering",
            description: "Bespoke software solutions tailored to your unique business challenges.",
            image: "/images/services/custom-engineering.png",
            features: ["Microservices Architecture", "API First Development", "Legacy Modernization", "High-Performance Web Apps"]
        },
        {
            title: "Cybersecurity",
            description: "Protecting your digital assets with enterprise-grade security protocols.",
            image: "/images/services/cybersecurity.png",
            features: ["Vulnerability Assessments", "Identity & Access Management", "Threat Detection", "Security Audits"]
        },
        {
            title: "Data Strategy",
            description: "Turning raw data into strategic assets for better decision making.",
            image: "/images/services/data-strategy.png",
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
                        <div key={index} className="flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm transition-all hover:shadow-xl hover:border-primary/20 group">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium">Explore Service</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                                <p className="mb-6 text-muted-foreground flex-1 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm font-medium">
                                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="w-full">
                                    <Button variant="outline" className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 rounded-[3rem] bg-primary p-8 md:p-16 text-center text-primary-foreground overflow-hidden relative">
                    <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl -ml-32 -mb-32" />

                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-6">Ready to transform your business?</h2>
                        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-xl leading-relaxed">
                            Let&apos;s discuss how our consulting services can help you achieve your strategic goals and drive innovation.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                Get a Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative py-20 md:py-32 overflow-hidden border-b">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-8 max-w-screen-xl relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Last Updated: February 22, 2026
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-8 max-w-screen-xl py-16 md:py-24">
                <div className="prose prose-slate dark:prose-invert max-w-4xl mx-auto space-y-12">
                    <section>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At Kramah Stanch, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website <Link href="https://kramahstanch.com/" className="text-primary hover:underline">https://kramahstanch.com/</Link> and use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may collect personal information that you provide to us, such as your name, email address, phone number, and any other information you choose to provide when you contact us or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Use of Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use the information we collect to provide and improve our services, communicate with you, analyze how our website is used, and for other internal business purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Sharing of Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We do not sell your personal information to third parties. We may share your information with service providers who help us provide our services, or as required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Sensitive Information</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We do not collect sensitive personal information, such as information about your race, religion, or health, unless you provide it to us and we have a legal basis for processing it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies and similar tracking technologies to enhance your experience on our website and to analyze traffic. You can manage your cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Log Files</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We collect information that your browser sends whenever you visit our website, such as your IP address, browser type, and the pages you visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Social Media Features</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website may include social media features, such as the Facebook "Like" button. These features may collect information about your IP address and the page you are visiting on our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Customer Testimonials and Comments</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We post customer testimonials and comments on our website, which may contain personal information. We obtain each customer&apos;s consent prior to posting the customer&apos;s name and testimonial.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. External Websites</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website provides links to other websites. We do not control and are not responsible for the content or practices of these other websites. Our Privacy Policy does not apply to these other websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">10. Corporate Events</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If Kramah Stanch is involved in a merger, acquisition, or sale of assets, your personal information may be transferred as part of that event.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">11. Data Retention</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">12. Your Choices</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You have the right to access, correct, or delete your personal information. You can also object to the processing of your personal data or request data portability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">13. Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We take reasonable technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">14. Children’s Privacy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">15. International Transfers</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Your personal information may be transferred to and processed in countries other than the country in which you reside. We take steps to ensure that your personal data is protected in accordance with applicable laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">16. Changes to this Privacy Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">17. Compelled Disclosure</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may disclose your personal information if required to do so by law or in response to a valid request by public authorities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">18. General</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You may not transfer any of your rights under this privacy policy to any other person. This agreement will be governed by and interpreted according to the law of England and Wales.
                        </p>
                    </section>

                    <section className="bg-secondary/20 p-8 rounded-3xl border">
                        <h2 className="text-2xl font-bold mb-4">19. Contact Us</h2>
                        <p className="text-muted-foreground mb-6">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p className="text-primary hover:underline">inquiries@kramahstanch.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Phone</h3>
                                <p className="text-muted-foreground">+44 7629683523</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Address</h3>
                                <p className="text-muted-foreground">
                                    21 Glebe Road<br />
                                    Solihull<br />
                                    B91 2LX England
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 md:px-8 max-w-screen-xl py-16 md:py-24">
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-4">Your Trust is Our Priority</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                        We are committed to being transparent about how we handle your data. If you have any concerns, please reach out.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold">
                            Get in Touch
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

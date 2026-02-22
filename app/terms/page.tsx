import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
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
                            Terms and <span className="text-primary">Conditions</span>
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
                            Welcome to Kramah Stanch ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website located at <Link href="https://kramahstanch.com/" className="text-primary hover:underline">https://kramahstanch.com/</Link> (the "Website") and our services (the "Services"). By accessing or using the Website or Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website or Services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing or using the Website or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. User Content</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You are solely responsible for any content that you post, upload, or otherwise make available through the Website or Services ("User Content"). You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use all User Content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The Website and its original content, features, and functionality are and will remain the exclusive property of Kramah Stanch and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Kramah Stanch.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Disclaimers</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The Website and Services are provided on an "as is" and "as available" basis. Kramah Stanch makes no representations or warranties of any kind, express or implied, as to the operation of the Website or the information, content, materials, or products included on the Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            In no event shall Kramah Stanch, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Website or Services; (ii) any conduct or content of any third party on the Website or Services; (iii) any content obtained from the Website or Services; and (iv) unauthorized access, use, or alteration of your transmissions or content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Indemnification</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You agree to defend, indemnify, and hold harmless Kramah Stanch and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of (a) your use and access of the Website or Services, by you or any person using your account and password; (b) a breach of these Terms, or (c) User Content posted on the Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may terminate or suspend your access to the Website or Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Entire Agreement</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms constitute the entire agreement between you and Kramah Stanch with respect to your use of the Website and Services and supersede all prior or contemporaneous communications and proposals, whether oral or written.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">10. Severability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">11. Waiver</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.
                        </p>
                    </section>

                    <section className="bg-secondary/20 p-8 rounded-3xl border">
                        <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                        <p className="text-muted-foreground mb-6">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p className="text-primary hover:underline">inquiries@kramahstanch.com</p>
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
                    <h2 className="text-3xl font-bold mb-4">Have questions about our Terms?</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                        Our team is here to help you understand how we operate and ensure a transparent partnership.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

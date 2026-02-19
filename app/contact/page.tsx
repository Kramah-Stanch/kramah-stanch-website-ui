"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { useActionState } from "react"
import { submitContactForm } from "@/app/actions"

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 md:px-8 max-w-screen-xl py-16 md:py-24">
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6">
                            Let&apos;s Build the Future Together
                        </h1>
                        <p className="text-lg text-muted-foreground mb-12">
                            Whether you have a question about our services, pricing, or want to discuss a potential partnership,
                            our team is ready to answer all your questions.
                        </p>

                        <div className="grid gap-8">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Us</h3>
                                    <p className="text-muted-foreground">inquiries@kramahstanch.com</p>
                                    <p className="text-muted-foreground">support@kramahstanch.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Call Us</h3>
                                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 8am to 6pm EST</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        21 Glebe Road<br />
                                        Solihull<br />
                                        B91 2LX England
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Container */}
                    <div className="rounded-2xl border bg-card p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, null)

    if (state?.success) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                    {state.message}
                </p>
                <Button variant="outline" onClick={() => window.location.reload()}>
                    Send Another Message
                </Button>
            </div>
        )
    }

    return (
        <form className="grid gap-6" action={formAction}>
            <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
                <Input id="name" name="name" placeholder="John Doe" required />
                {state?.errors?.name && <p className="text-red-500 text-sm">{state.errors.name}</p>}
            </div>
            <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address</label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                {state?.errors?.email && <p className="text-red-500 text-sm">{state.errors.email}</p>}
            </div>
            <div className="grid gap-2">
                <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company</label>
                <Input id="company" name="company" placeholder="Acme Inc." />
            </div>
            <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[150px]" required />
                {state?.errors?.message && <p className="text-red-500 text-sm">{state.errors.message}</p>}
            </div>
            {state?.message && !state?.success && <p className="text-red-500 text-sm">{state.message}</p>}
            <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
            </Button>
        </form>
    )
}

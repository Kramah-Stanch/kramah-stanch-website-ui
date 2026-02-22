import Link from "next/link"
import { Zap } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <Zap className="h-4 w-4" />
                            </div>
                            <span className="text-lg font-bold">Kramah Stanch</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Architecting the intelligent enterprise with SAP, AWS, and AI solutions.
                        </p>
                        <div className="text-sm text-muted-foreground mt-4 space-y-1">
                            <p>21 Glebe Road, Solihull</p>
                            <p>B91 2LX England</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Solutions</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">SAP Transformation</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">AWS Cloud</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">AI & Automation</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Company</h3>
                        <Link href="/about" className="text-sm text-muted-foreground hover:underline">About Us</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">Careers</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:underline">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Legal</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:underline">Terms of Service</Link>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © 2026 Kramah Stanch. All rights reserved. Engineering Excellence.
                    </p>
                </div>
            </div>
        </footer>
    )
}

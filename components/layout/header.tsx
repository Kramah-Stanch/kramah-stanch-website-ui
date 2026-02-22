import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Zap } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <img
                            src="/logo.png"
                            alt="Kramah Stanch Logo"
                            className="h-8 w-auto object-contain"
                        />
                        <span className="hidden text-lg font-bold sm:inline-block">
                            Kramah Stanch
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Services
                        </Link>
                        <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Insights
                        </Link>
                        <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            About
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* <div className="hidden md:flex">
                        <Button variant="ghost" size="sm">Client Portal</Button>
                    </div> */}
                    <Link href="/contact">
                        <Button size="sm">Get Consultation</Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

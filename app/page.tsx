import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Trust } from "@/components/sections/trust"
import { BlogPreview } from "@/components/sections/blog-preview"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
      <BlogPreview />
    </>
  );
}

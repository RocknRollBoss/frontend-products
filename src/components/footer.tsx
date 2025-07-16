import { Link } from "react-router-dom"
import { BadgeDollarSign, Github, Twitter, Send } from "lucide-react"
import { RoutesEnum } from "@/routes"
import { ModeToggle } from "./mode-toggle"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-muted-foreground border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to={RoutesEnum.HOME} className="flex items-center gap-2">
          <BadgeDollarSign size={20} className="text-green-600" />
          <span className="text-base font-semibold text-foreground">
            Products
          </span>
        </Link>

        <nav className="flex gap-6 text-sm font-medium">
          <Link
            to={RoutesEnum.HOME}
            className="hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to={RoutesEnum.PRODUCTS}
            className="hover:text-foreground transition-colors"
          >
            Products
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Send size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <Twitter size={20} />
          </a>
          <ModeToggle />
        </div>
      </div>

      <div className="border-t mt-4 pt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Products. All rights reserved.
      </div>
    </footer>
  )
}

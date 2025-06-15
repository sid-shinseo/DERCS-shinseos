import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface ContactProps {
    className?: string
    type?: "link" | "default" | "destructive"
}

const Contact = ({ className, type = "link" }: ContactProps) => {

    const buttonClass = {
        link: "link-p font-semibold text-white hover:text-primary-light animate-hover px-2 lg:px-4 cursor-pointer",
        default: "text-lg px-8 py-5 font-semibold hover:bg-primary/80 hover:text-white hover:border-primary animate-hover",
        destructive: "text-lg px-8 py-5 font-semibold hover:bg-destructive/80 hover:text-white hover:border-primary animate-hover bg-destructive hover:bg-destructive/80 hover:text-white"
    }

  return (
    <Link to="/contactez-nous">
        <Button variant={type} className={`${buttonClass[type]} ${className}`}>
            <Mail className="w-4 h-4" /> Contactez-nous
        </Button>
    </Link>
  )
}

export default Contact
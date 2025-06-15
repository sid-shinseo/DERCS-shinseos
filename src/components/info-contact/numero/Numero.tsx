import { PhoneCall } from "lucide-react"

const Numero = () => {
  return (
    <a href="tel:0101010101" className="flex gap-2 items-center text-lg font-medium hover:bg-secondary/80 hover:text-white hover:border-primary animate-hover border-2 border-primary rounded-md px-[32px] py-[7px]">
             <PhoneCall className="w-4 h-4" />  01 01 01 01 01
            </a>
  )
}

export default Numero
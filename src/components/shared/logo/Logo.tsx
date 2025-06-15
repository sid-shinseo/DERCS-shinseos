import logo from "@/assets/logo-crop.png"

interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return (
        <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className={`w-20 h-20 ${className}`} />
            <h1 className={`text-[50px] align-text-top font-bold text-primary ${className}`}>DERCS</h1>
        </div>
    )
}
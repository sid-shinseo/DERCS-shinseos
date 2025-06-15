import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import Logo from '@/components/shared/logo/Logo'
import NavigationMenuTopbar from './NavigationMenuTopbar'
import { Info, Mail } from 'lucide-react'


const Topbar = () => {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">

        <Logo />

        <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-2 lg:mt-0 text-sm lg:text-base sm:mb-2">
          <Link to="/" className="">
          <Button 
            variant="link" 
            className="link-p font-semibold animate-hover px-2 lg:px-4">
              Accueil
            </Button>
          </Link>

          <NavigationMenuTopbar />

          <Link to="/infos-utiles" className="">
            <Button 
              variant="default" 
              className="link-p font-semibold animate-hover hover:bg-secondary/80 text-dark hover:text-primary-light px-2 lg:px-4">
                <Info className="w-4 h-4" /> Infos utiles
            </Button>
          </Link>

            <Link to="/contactez-nous" className="">
              <Button 
                variant="destructive" 
                className="link-p font-semibold animate-hover hover:bg-destructive/80 text-white px-2 lg:px-4">
                  <Mail className="w-4 h-4" /> Contactez-nous
              </Button>
          </Link>

        </div>
        
      </div>
      <hr className="w-screen left-1/2 -translate-x-1/2 relative h-[1px]  mb-6 mt-4" />
    </section>
  )
}

export default Topbar
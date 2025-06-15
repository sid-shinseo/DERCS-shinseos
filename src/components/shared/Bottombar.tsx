import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import Logo from '@/components/shared/logo/Logo'
import Contact from '@/components/info-contact/contact/Contact'

const Bottombar = () => {
  return (
    <section className="full-width-section">
      <hr className="w-screen left-1/2 -translate-x-1/2 relative h-[1px] bg-primary " />
      <div className="flex flex-col lg:flex-row  justify-between gap-4 mx-8 mt-10">
        <div className="flex items-center gap-2 mx-auto">
        <Logo className="w-40 h-40 text-[100px]"/>
        </div>

        <div className="flex flex-col flex-wrap items-start gap-2 lg:gap-4 mt-2 lg:mt-0 text-sm lg:text-base sm:mb-2 mx-50">
          <Link to="/" className="">
          <Button 
            variant="link" 
            className="link-p font-semibold text-white hover:text-primary-light animate-hover px-2 lg:px-4 cursor-pointer">
              Accueil
            </Button>
          </Link>

          <Link to="/contactez-nous" className="">
          <Button 
            variant="link" 
            className="link-p font-semibold text-white hover:text-primary-light animate-hover px-2 lg:px-4 cursor-pointer">
              Contactez-nous
            </Button>
          </Link> 

          <Link to="/mentions-legales" className="">
          <Button 
            variant="link" 
            className="link-p font-semibold text-white hover:text-primary-light animate-hover px-2 lg:px-4 cursor-pointer">
              Mentions légales
            </Button>
          </Link>

          <Link to="/plan-du-site" className="">
          <Button 
            variant="link" 
            className="link-p font-semibold text-white hover:text-primary-light animate-hover px-2 lg:px-4 cursor-pointer">  
              Plan du site
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col items-center gap-2 ml-40 mr-30">
        <h3 className="h3 font-semibold text-center">
        DERCS, spécialiste en plomberie, <br /> chauffage et gaz à Illzach.
        </h3> 
        <Contact type="destructive" />
        </div>
      </div>
    </section>
  )
}

export default Bottombar
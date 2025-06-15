import Numero from "@/components/info-contact/numero/Numero"
import Contact from "@/components/info-contact/contact/Contact"


const Hero = () => {
  return (
    <section className=" text-white py-16 px-2 text-center md:text-left">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-2/3">
          <h1 className="text-4xl text-primary md:text-5xl font-bold mb-4 leading-tight">
            Votre expert en plomberie <br />et chauffage depuis 2022
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            <span className="font-bold">DERCS</span>, entreprise située à <span className="font-bold underline">Illzach</span>, intervient rapidement et efficacement pour tous vos besoins en plomberie, chauffage, installation d’eau ou de gaz.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            <Contact />
            <Numero />
          </div>
        </div>
        <div className="md:w-1/3">
          {/* Tu peux y placer une image ou illustration ici */}
          <img
            src="/assets/images/depannage-illustration.svg"
            alt="Technicien DERCS en intervention"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
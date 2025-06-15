
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dépannage de chaudières",
    href: "/nos-prestations/depannage-de-chaudieres",
    description:
      "DERCS intervient rapidement pour le dépannage de chaudières, tous types et toutes marques",
  },
  {
    title: "Dépannage en plomberie",
    href: "/nos-prestations/depannage-en-plomberie",
    description:
      "Fuites, robinets défectueux, canalisations bouchées : DERCS propose des solutions de dépannage plomberie efficaces et durables",
  },
  {
    title: "Installations sanitaires",
    href: "/nos-prestations/installations-sanitaires",
    description:
      "DERCS réalise l’installation complète de vos équipements sanitaires, avec un savoir-faire professionnel et des finitions soignées",
  },
  {
    title: "Installation de chauffage central",
    href: "/nos-prestations/installation-de-chauffage-central",
    description: "Nous installons des systèmes de chauffage central performants et adaptés à votre logement, pour un confort optimal toute l’année",
  },
  {
    title: "Débouchage de canalisations",
    href: "/nos-prestations/debouchage-de-canalisations",
    description:
      "DERCS assure le débouchage rapide de vos canalisations grâce à des équipements adaptés, en limitant les désagréments au maximum",
  },
]

export function NavigationMenuTopbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="link-p font-semibold cursor-pointer text-primary hover:underline animate-hover">Nos prestations</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background text-foreground p-4 rounded-md cursor-pointer shadow-md w-2xl pt-2 mt-2">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  to={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({
    className,
    title,
    children,
    ...props
  }: {
    title: string
    to: string
    children: React.ReactNode
    className?: string
  }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            className={cn(
              " block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/40 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
  

ListItem.displayName = "ListItem"

export default NavigationMenuTopbar

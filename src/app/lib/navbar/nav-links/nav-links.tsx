import Link from "next/link";

interface NavLinksProps {
    link: string,
    children: React.ReactNode,
  }
  
  export default function NavLinks(props: NavLinksProps) {
    return (
        <li>
          <Link href={ props.link } className="p-5 bg-secondary-300 block w-screen hover:bg-primary-300 md:inline md:bg-inherit md:py-0.5 md:border-solid md:rounded-lg md:border-2 md:border-transparent md:hover:border-white-75 md:hover:bg-white-50">
            { props.children }
          </Link>
        </li>
    )
  }
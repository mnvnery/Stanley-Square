import Link from "next/link"
import { IoIosPin } from 'react-icons/io'
import Image from "next/image"
import headerNavLinks from "../data/headerNavLinks"
import { useRouter } from "next/router"
import MobileNav from "./MobileNav"
import siteMetadata from "../data/siteMetadata"
import LinkButton from "../components/LinkButton"

const Header = () => {
    const router = useRouter()
    return (
        <>
        <div className="flex border-b border-white text-xl justify-center md:justify-start">
            <div className="uppercase md:border-r border-white px-6 py-2">
                <a className="hover:text-tpurple">Twitter/</a>
                <a className="hover:text-tred">Instagram/</a>
                <a className="hover:text-tpink">Facebook</a>
            </div>
            <div className="grow py-2 px-4 items-center justify-end hidden md:flex"><IoIosPin /> <a href={siteMetadata.maps} target="_blank" rel='noreferrer'>FIND US</a></div>
            <div className="py-2 px-4 border-l border-white hidden md:block">9AM-5:30PM</div>
        </div>
        <div className="mt-20 mb-14 hidden md:block">
            <div className="relative h-20">
                <Link href='/'><a><Image src='/logo.svg' layout='fill' objectFit="contain"/></a></Link>
            </div>
        </div>
        <div className="flex justify-between items-center md:hidden px-5 py-7 sticky top-0 bg-black z-10">
            <div className="relative w-20 h-20">
                <Link href='/'><a><Image src='/logo-mobile.svg' layout='fill' objectFit="contain"/></a></Link>
            </div>
            <MobileNav/>
        </div>
        <div className="items-center justify-center space-x-5 hidden md:flex">
            <LinkButton title="What's On" href="/whats-on" color="white" router={router}/>
            <LinkButton title="Shop" href="/shop" color="tred" router={router}/>
            <LinkButton title="Eat&Drink" href="/eat-drink" color="tgrey" router={router}/>
            <LinkButton title="Services" href="/services" color="tbrown" router={router}/>
            <LinkButton title="Offices" href="/offices" color="tpink" router={router}/>
            <LinkButton title="Visit Us" href="/visit-us" color="tpurple" router={router}/>
        </div>
        </>
    )
}

export default Header
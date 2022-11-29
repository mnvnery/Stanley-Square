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
        <div className="flex border-b border-white text-xl justify-center md:justify-start xxl:text-4xl">
            <div className="uppercase md:border-r border-white px-6 py-2">
                <a href={siteMetadata.twitter} className="hover:text-tpurple" target='_blank' rel="noreferrer">Twitter/</a>
                <a href={siteMetadata.instagram} className="hover:text-tred" target='_blank' rel="noreferrer">Instagram/</a>
                <a href={siteMetadata.facebook} className="hover:text-tpink" target='_blank' rel="noreferrer">Facebook</a>
            </div>
            <div className="grow py-2 px-4 items-center justify-end hidden md:flex"><IoIosPin /> <a href={siteMetadata.maps} target="_blank" rel='noreferrer'>FIND US</a></div>
            <div className="py-2 px-4 border-l border-white hidden md:block">9:30AM-11PM</div>
        </div>
        <div className="mt-20 mb-14 hidden md:block xxl:my-20">
            <div className="relative h-20 xxl:h-24">
                <Link href='/'><a><Image src='/logo.svg' layout='fill' objectFit="contain"/></a></Link>
            </div>
        </div>
        <div className="flex justify-between items-center md:hidden px-5 py-7 sticky top-0 bg-black z-10">
            <div className="relative w-20 h-20">
                <Link href='/'><a><Image src='/logo-mobile.svg' layout='fill' objectFit="contain"/></a></Link>
            </div>
            <MobileNav/>
        </div>
        <div className="items-center justify-center space-x-6 hidden md:flex md:sticky md:top-0 md:bg-black md:py-5 md:z-10 xxl:pt-14">
            <LinkButton title="What's On" href="/whats-on" color="twhite" router={router}/>
            <LinkButton title="Retail" href="/retail" color="tred" router={router}/>
            <LinkButton title="Eat&Drink" href="/eat-drink" color="tgrey" router={router}/>
            <LinkButton title="Services" href="/services" color="tbrown" router={router}/>
            <LinkButton title="Offices" href="/offices" color="tpink" router={router}/>
            <LinkButton title="Visit Us" href="/visit-us" color="tpurple" router={router}/>
            <div className="hidden hover:text-tbrown">hi</div>
            <div className="hidden hover:text-twhite">hi</div>

            {/*
            <div className="bg-white text-black hover:bg-transparent hover:text-tgrey">WHAT'S ON</div>
            */}
        </div>
        </>
    )
}

export default Header
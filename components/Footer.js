import Image from "next/image"
import Link from "next/link"
import siteMetadata from "../data/siteMetadata"

const Footer = ({shops}) => {
    const eatDrink = shops.filter(shop => shop.category == 'Eat&Drink');
    const retail = shops.filter(shop => shop.category == 'Retail');
    const services = shops.filter(shop => shop.category == 'Services');
    return (
        <div className='bg-black'>
            <div className="grid grid-cols-2 m-5 gap-5 md:grid-cols-4 md:gap-12 md:text-3xl md:my-10 md:mx-8">
                <div>
                <div className="uppercase text-tred border-b border-tred mb-3">Retail</div>
                    {retail.map((shop, i) => (
                        <div className="md:text-2xl">{shop.title}</div>
                    ))}
                </div>
                <div>
                    <div className="uppercase text-tgrey border-b border-tgrey mb-3">Eat & Drink</div>
                    {eatDrink.map((shop, i) => (
                        <div className="md:text-2xl">{shop.title}</div>
                    ))}
                </div>
                <div>
                    <div className="uppercase text-torange border-b border-torange mb-3">Retail</div>
                    {services.map((shop, i) => (
                        <div className="md:text-2xl">{shop.title}</div>
                    ))}
                </div>
            </div>
            <div className="border-y border-white py-10 mx-5 md:mx-8 grid grid-cols-2 md:grid-cols-4 md:gap-12 md:text-2xl">
                <div className="relative h-24 w-24 md:w-40 md:h-40">
                    <Image src='/logo-mobile.svg' layout='fill' objectFit="contain"/>
                </div>
                <div className="hidden md:block">
                    <div className="text-tred">Stanley Square</div>
                    <div>Sale<br/>Manchester<br/>M33 7ZZ</div><br/>
                    <div><a href={`tel:${siteMetadata.phone}`} className="hover:underline">{siteMetadata.phone}</a></div>
                    <div><a href={`mailto:${siteMetadata.email}`} className="hover:underline">{siteMetadata.email}</a></div><br/><br/>
                    <div>All rights reserved</div>
                </div>
                <div className="flex space-x-8 md:space-x-20">
                    <div>
                        <div className="text-tred">Visit</div>
                        <div><Link href='/shop'><a className="hover:underline">Shop</a></Link></div>
                        <div><Link href='/food-drink'><a className="hover:underline">Food&Drink</a></Link></div>
                        <div><Link href='/services'><a className="hover:underline">Services</a></Link></div>
                        <div><Link href='/FAQs'><a className="hover:underline">FAQs</a></Link></div>
                        <div><Link href='/find-us'><a className="hover:underline">Find Us</a></Link></div>
                    </div>
                    <div>
                        <div className="text-tred">Follow</div>
                        <div><a href={siteMetadata.instagram} target='_blank' className="hover:underline">Instagram</a></div>
                        <div><a href={siteMetadata.twitter} target='_blank' className="hover:underline">Twitter</a></div>
                        <div><a href={siteMetadata.facebook} target='_blank' className="hover:underline">Facebook</a></div>
                    </div>
                </div>
                <div className="md:hidden leading-tight">
                    <div className="text-tred">Stanley Square</div>
                    <div>Sale<br/>Manchester<br/>M33 7ZZ</div><br/>
                    <div><a href={`tel:${siteMetadata.phone}`} className="hover:underline">{siteMetadata.phone}</a></div>
                    <div><a href={`mailto:${siteMetadata.email}`} className="hover:underline">{siteMetadata.email}</a></div><br/><br/>
                    <div>All rights reserved</div>
                </div>
            </div>
            <div className="flex justify-between pt-2 pb-20 mx-5 text-sm md:mx-8 md:text-2xl">
                <div>Design by: <a href="studiodbd.com" target='_blank' className="underline hover:text-tpurple">StudioDBD</a></div>
                <div>Copyright © 2022 Stanley Square</div>
            </div>

        </div>
    )
}
export default Footer
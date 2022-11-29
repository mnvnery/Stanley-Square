import Image from "next/image"
import Link from "next/link"
import siteMetadata from "../data/siteMetadata"

const Footer = ({shops}) => {
    const eatDrink = shops.filter(shop => shop.category == 'Eat&Drink');
    const retail = shops.filter(shop => shop.category == 'Retail');
    const services = shops.filter(shop => shop.category == 'Services');
    return (
        <div className='bg-black'>
            <div className="grid grid-cols-2 m-5 gap-5 md:grid-cols-4 md:gap-12 md:text-3xl md:my-10 md:mx-8 xxl:mx-32 xxl:my-20 xxl:text-5xl">
                <div>
                <div className="uppercase text-tred border-b border-tred mb-3">Retail</div>
                    {retail.map((shop, i) => (
                        <div key={i}>
                            {shop.link === "" 
                            ? <div className="md:text-2xl xxl:text-4xl">{shop.title}</div>
                            : <a href={`https://${shop.link}`} target='_blank' rel="noreferrer" className="cursor-pointer hover:text-tred"><div className="md:text-2xl xxl:text-4xl">{shop.title}</div></a>
                            }
                        </div>
                    ))}
                </div>
                <div>
                    <div className="uppercase text-tgrey border-b border-tgrey mb-3">Eat & Drink</div>
                    {eatDrink.map((shop, i) => (
                        <div key={i}>
                            {shop.link === "" 
                            ? <div className="md:text-2xl xxl:text-4xl">{shop.title}</div>
                            : <a href={`https://${shop.link}`}  target='_blank' rel="noreferrer" className="cursor-pointer hover:text-tgrey"><div className="md:text-2xl xxl:text-4xl">{shop.title}</div></a>
                            }
                        </div>
                    ))}
                </div>
                <div>
                    <div className="uppercase text-torange border-b border-torange mb-3">Services</div>
                    {services.map((shop, i) => (
                        <div key={i}>
                            {shop.link === "" 
                            ? <div className="md:text-2xl xxl:text-4xl">{shop.title}</div>
                            : <a href={`https://${shop.link}`} target='_blank' rel="noreferrer" className="cursor-pointer hover:text-torange"><div className="md:text-2xl xxl:text-4xl">{shop.title}</div></a>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-y border-white py-10 mx-5 md:mx-8 grid grid-cols-2 md:grid-cols-4 md:gap-12 md:text-2xl xxl:text-4xl xxl:mx-32 xxl:py-20">
                <div className="relative h-24 w-24 md:w-40 md:h-40">
                    <Link href='/'><a><Image src='/logo-mobile.svg' layout='fill' objectFit="contain"/></a></Link>
                </div>
                <div className="hidden md:block">
                    <a href={siteMetadata.maps} className='hover:underline'>
                    <div className="text-tred">Stanley Square</div>
                    <div>Sale<br/>Manchester<br/>M33 7ZZ</div></a><br/>
                    <div><a href={`tel:${siteMetadata.phone}`} className="hover:underline">{siteMetadata.phone}</a></div>
                    <div><a href={`mailto:${siteMetadata.email}`} className="hover:underline">{siteMetadata.email}</a></div><br/><br/>
                    <div>All rights reserved</div>
                </div>
                <div className="flex space-x-8 mb-5 md:mb-0 md:space-x-20">
                    <div>
                        <div className="text-tred">Visit</div>
                        <div><Link href='/retail'><a className="hover:underline">Retail</a></Link></div>
                        <div><Link href='/eat-drink'><a className="hover:underline">Eat&Drink</a></Link></div>
                        <div><Link href='/services'><a className="hover:underline">Services</a></Link></div>
                        <div><Link href='/visit-us/#faqs'><a className="hover:underline">FAQs</a></Link></div>
                        <div><Link href='/visit-us'><a className="hover:underline">Visit Us</a></Link></div>
                    </div>
                    <div>
                        <div className="text-tred">Follow</div>
                        <div><a href={siteMetadata.instagram} target='_blank' rel='noreferrer' className="hover:underline">Instagram</a></div>
                        <div><a href={siteMetadata.twitter} target='_blank' rel='noreferrer' className="hover:underline">Twitter</a></div>
                        <div><a href={siteMetadata.facebook} target='_blank' rel='noreferrer' className="hover:underline">Facebook</a></div>
                    </div>
                </div>
                <div className="md:hidden leading-tight flex flex-col justify-between">
                    <div>
                        <div className="text-tred">Stanley Square</div>
                        <div>Sale<br/>Manchester<br/>M33 7ZZ</div><br/>
                        <div><a href={`tel:${siteMetadata.phone}`} className="hover:underline">{siteMetadata.phone}</a></div>
                        <div><a href={`mailto:${siteMetadata.email}`} className="hover:underline">{siteMetadata.email}</a></div><br/><br/>
                    </div>
                    <div>All rights reserved</div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                    <div className="text-tred">Looking for space?</div>
                    <form name="Contact" method="POST" data-netlify="true">
                        <div className="flex flex-col mt-2 space-y-2 xxl:gap-10">
                            <input type="text" id="name" name="name"  placeholder='Name' className="w-full md:w-3/4  bg-transparent border border-white text-white px-2 text-base xxl:text-3xl"/>
                            <input type="text" id="email" name="email" placeholder='Email' className="w-full md:w-3/4 bg-transparent border border-white text-white my-2 px-2 text-base xxl:text-3xl"/>
                            <textarea type="text" id="comments" name="comments" placeholder='Message' className="w-full md:w-3/4 min-h-[10vh] bg-transparent border border-white text-white px-2 text-base xxl:text-3xl"/>
                            <button type="submit" className="text-lg py-1 text-center flex items-center w-fit hover:border-b border-white rounded-0"><span>SUBMIT</span>  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.35 13.46" className='ml-3 w-10'><path fill='white' d="M37.82,9.04c-1.12,1.12-1.75,2.64-1.75,4.22v.19s18.29-6.73,18.29-6.73L36.07,0V.27c0,1.58,.63,3.1,1.75,4.23h0c.27,.27,.27,.71,0,.98h0c-.27,.27-.71,.27-.98,0l-.08-.08c-1.12-1.12-2.63-1.75-4.21-1.75h0c-.81,0-1.46,.66-1.46,1.46v1.28h-14.48s-2.19-2.7-2.19-2.7H0s2.45,3.02,2.45,3.02L0,9.75H14.41s2.19-2.7,2.19-2.7h14.48s0,1.21,0,1.21c0,.85,.69,1.54,1.54,1.54h0c1.58,0,3.1-.63,4.21-1.75h0c.27-.27,.71-.27,.98,0h0c.27,.27,.27,.71,0,.98h0ZM4.17,6.73l-1.37-1.69H13.78s1.37,1.69,1.37,1.69H4.17Z"/></svg></button>
                        </div>
                    </form>
                    </div>
                    <div className="relative h-12 w-28 mt-4 md:w-40 md:h-20">
                        <Image src='/footer-logos.png' layout="fill" objectFit="contain"/>
                    </div>
                </div>

            </div>
            <div className="flex justify-between pt-2 pb-20 mx-5 text-sm md:mx-8 md:text-2xl xxl:text-4xl xxl:mx-32 xxl:py-5 xxl:mb-20">
                <div>Design by: <a href="studiodbd.com" target='_blank' className="underline hover:text-tpurple">StudioDBD</a></div>
                <div>Copyright © 2022 Stanley Square</div>
            </div>

        </div>
    )
}
export default Footer
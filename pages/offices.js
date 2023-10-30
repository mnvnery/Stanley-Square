
import {request} from '../lib/datocms'
import { OFFICESPAGE_QUERY, SHOPS_QUERY } from '../lib/queries'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroSection from '../components/HeroSection'
import Image from 'next/image'
import PageTitle from '../components/PageTitle'
import SoftMotion from '../components/SoftMotion'
import LeftMotion from '../components/LeftMotion'
import RightMotion from '../components/RightMotion'
import {motion} from 'framer-motion'


export async function getStaticProps() {
    const data = await request({
        query: OFFICESPAGE_QUERY,
    })

    const shop = await request({
        query: SHOPS_QUERY,
    })

    return {
        props: {
        data: data.officesPage,
        shops: shop.allShops
        },
    }
}




export default function Offices({data, shops}) {    
    return (  
        <div className='overflow-x-hidden w-full'>
        <div className='relative w-screen h-[45vh] md:mt-16 md:h-screen'>
            <Image src={data.heroImage.url} objectFit='cover' objectPosition='left bottom' layout='fill'/>
        </div>
        <div className='bg-tpink text-black px-8 md:px-10 py-10'>
            <PageTitle title='Offices' borderColour='border-black'/>
            <SoftMotion>
            <div className='md:grid grid-cols-2 mt-10 md:mt-16'>
                <div dangerouslySetInnerHTML={{__html: data.largeParagraph}} className='text-4xl mb-10 md:mb-0 md:text-5xl md:w-3/4 xxl:text-7xl'/>
                <div dangerouslySetInnerHTML={{__html: data.smallerParagraph}} className='text-2xl paragraph ml-6 md:ml-0 xxl:text-5xl'/>
            </div>
            </SoftMotion>
            <div className='grid md:grid-cols-2 mt-10 mb-16'>
                <LeftMotion>
                <div>
                    <div className='relative w-full mb-5 h-[40vh] md:h-[70vh]'>
                        <Image src={data.image1.url} layout='fill' objectFit='cover' className='rounded-3xl'/>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: data.pullOut}} className='md:w-[70%] md:leading-tight py-20 text-5xl md:text-5xl xxl:text-8xl'/>
                    <a href='https://the-classrooms.com' target='_blank' rel='noreferrer'><div className='bg-[#39324C] text-tpink border-2 border-[#39324C] hover:text-[#39324C] hover:bg-transparent inline-block px-5 pb-1 rounded-full text-2xl md:text-3xl xxl:text-5xl xxl:pt-1 xxl:pb-2 xxl:px-10'>SIGN UP FOR INFORMATION</div></a>
                </div>
                </LeftMotion>
                <motion.div className='relative h-[70vh] md:h-auto'
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ stiffness: 50, duration: 0.7 }}>
                    <div className='absolute w-1/2 top-8 left-1/2 md:top-[15vh] md:left-[12vw] rotate-12 hover:top-[10vh] hover:rotate-6 transition-all'>
                        <Image src={data.pages[0].url} width={data.pages[0].width} height={data.pages[0].height}/>
                    </div>
                    <div className='absolute w-1/2 top-20 md:top-[45vh] md:left-[-10vw] -rotate-12 hover:-rotate-[25deg] transition-all'>
                        <Image src={data.pages[1].url} width={data.pages[1].width} height={data.pages[1].height}/>
                    </div>
                    {/*
                    <div className='absolute w-1/2 bottom-0 right-12 md:right-24 -rotate-6 hover:rotate-12 hover:bottom-[5vh] hover:right-14 transition-all'>
                        <Image src={data.pages[2].url} width={data.pages[2].width} height={data.pages[2].height}/>
                    </div>
                    */}
                </motion.div>
            </div>
            <div className='grid md:grid-cols-3 gap-8 text-xl md:text-lg'>
                {data.features.map((f, i) => (
                    <motion.div key={i} className="xxl:text-4xl xxl:py-8"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ stiffness: 50, duration: 0.7, delay: `0.${i+i}`}}>
                        <div className='relative h-[40vh] w-full mb-5 xxl:mb-10'>
                            <Image src={f.thumbnail.url} layout='fill' objectFit='cover' className='rounded-3xl'/>
                        </div>
                        <div className='underline'>{f.title}</div>
                        <div dangerouslySetInnerHTML={{__html: f.info}} className='md:w-2/3 md:leading-tight'/>
                    </motion.div>
                ))}
            </div>
        </div>
        <div className='bg-tpink'>
        <SoftMotion>
        <div className='relative w-screen h-[45vh] md:h-screen '>
            <Image src={data.largeImage.url} objectFit='cover' objectPosition='bottom' layout='fill'/>
        </div>
        </SoftMotion>
        </div>
        <Footer shops={shops}/>
        </div>
    )
}

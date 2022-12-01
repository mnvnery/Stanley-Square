
import {request} from '../lib/datocms'
import { VISITPAGE_QUERY, SHOPS_QUERY } from '../lib/queries'
import HeroSection from '../components/HeroSection'
import Title from '../components/Title'
import Image from 'next/image'
import PageTitle from '../components/PageTitle'
import SlideDown from "react-slidedown";
import Accordion from '../components/Accordion'
import Form from '../components/Form'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import SoftMotion from '../components/SoftMotion'
import LeftMotion from '../components/LeftMotion'

export async function getStaticProps() {
    const data = await request({
        query: VISITPAGE_QUERY,
    })

    const shop = await request({
        query: SHOPS_QUERY,
    })

    return {
        props: {
            data: data.visitUsPage, 
            shops: shop.allShops
        },
    }
}




export default function VisitUs({data, shops}) {
    const questionsAnswers = data.faqs
    return (  
        <div className='overflow-x-hidden w-full'>
        <HeroSection image={data.heroImage.url} text={data.heroText} />
        <div className='bg-tpurple text-black pt-10 px-8 md:px-10 pb-20 xxl:px-32'>
            <PageTitle title='Visit Us' borderColour='border-black'/>
            <SoftMotion>
            <div className='flex flex-col pt-10 text-2xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 md:space-x-16 xxl:text-5xl'>
                <div className='md:mr-20'>
                    <Title title='Opening Hours'/>
                    {data.openingTimes.map((d, i) => (
                        <div key={i} className='border-b border-black flex justify-between xxl:py-2'>
                            <div>{d.day}</div>
                            <div>{d.times}</div>
                        </div>
                    ))}
                    <div className='mt-12 w-3/4 md:w-2/4 text-xl md:leading-tight xxl:text-4xl'>
                        <div className='underline'>Good to know</div>
                        <div dangerouslySetInnerHTML={{__html: data.lateNightShopping}}/>
                    </div>
                </div>
                <div className='mt-8 md:mt-0'>
                    <Title title='Address'/>
                    <div dangerouslySetInnerHTML={{__html: data.address }} className='paragraph md:mr-20'/>
                </div>
            </div>
            </SoftMotion>
            <div className='my-10 xxl:my-20'>
                <Title title='How to get here'/>
                <div className='md:grid grid-cols-4 gap-10'>
                    {data.howToGetHere.map((t, i) => (
                        <motion.div key={i}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ stiffness: 50, duration: 0.7, delay: `0.${i+i}`}}>
                            <div className='text-2xl md:text-3xl mb-5 xxl:text-5xl xxl:mb-10'>{t.title}</div>
                            <div dangerouslySetInnerHTML={{__html: t.info }} className='text-xl leading-tight mb-5 md:mb-0 xxl:text-4xl'/>
                        </motion.div>
                    ))}
                </div>
            </div>
            <SoftMotion>
            <div className='relative w-auto h-[35vh] md:h-[80vh] my-14'>
                <Image src={data.largeImage.url} layout='fill' objectFit='cover' className='rounded-4xl'/>
            </div>
            </SoftMotion>
            <LeftMotion>
            <div>
                <Title title='Accessibility'/>
                <div dangerouslySetInnerHTML={{__html: data.accessibility }} className='paragraph text-2xl md:w-1/2 xxl:text-5xl'/>
            </div>
            </LeftMotion>
        </div>
        <div className='bg-black px-10 md:px-44 py-14 xxl:pb-36'>
            <PageTitle title='FAQS' borderColour='border-white'/>
            <div className='mb-8 md:mb-20'></div>
            <Accordion questionsAnswers={questionsAnswers}/>
        </div>
        <Footer shops={shops}/>
        </div>
    )
}
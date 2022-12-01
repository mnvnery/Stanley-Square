
import {request} from '../lib/datocms'
import { EVENTSPAGE_QUERY, SHOPS_QUERY, EVENTS_QUERY } from '../lib/queries'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Image from 'next/image'
import HightlightEvent from '../components/HightlightEvent'
import SoftMotion from '../components/SoftMotion'
import LeftMotion from '../components/LeftMotion'
import RightMotion from '../components/RightMotion'
import BorderMotion from '../components/BorderMotion'
import {motion} from 'framer-motion'

export async function getStaticProps() {
    const data = await request({
        query: EVENTSPAGE_QUERY,
    })

    const events = await request({
        query: EVENTS_QUERY,
    })

    const shop = await request({
        query: SHOPS_QUERY,
    })

    return {
        props: {
        data: data.whatsOnPage,
        events: events.allWhatsOns,
        shops: shop.allShops
        },
    }
}


export default function WhatsOn({data, events, shops}) {
    const remainingEvents = events.filter(e => !data.highlightEvents.find(el => (e.title === el.title)))
    return (  
        <div className='overflow-x-hidden w-full'>
        <div className='w-full border-t border-white md:mt-16 mb-4 xxl:mb-10'></div>
        <div className='px-5 md:px-8 md:mx-0 xxl:mx-32'>

        <LeftMotion>
        <div className='uppercase border-white mb-10 text-4xl md:text-8xl md:w-4/5' dangerouslySetInnerHTML={{__html: data.heroHeader}}/>
        </LeftMotion>
        <SoftMotion>
        <div className='grid grid-cols-[0.5fr_1.5fr] md:grid-cols-2 mb-8 md:mb-16'>
            <div className='w-16 justify-self-start md:justify-self-end md:self-center md:mr-40 md:w-48'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.75 136.75"><path fill="white" d="M91.83,102.85c-5.34,0-10.46,2.12-14.24,5.9l-.46,.46,59.62,27.55-27.55-59.62-.64,.64c-3.78,3.78-5.9,8.9-5.9,14.24,0,1.29-1.06,2.35-2.35,2.35s-2.35-1.06-2.35-2.35v-.36c0-5.33-2.12-10.44-5.88-14.2-1.93-1.93-5.05-1.93-6.98,0l-3.05,3.06L47.55,46l1.22-11.64L14.42,0l-1.37,13.05L0,14.42,34.35,48.77l11.64-1.22,34.51,34.51-2.87,2.87c-2.03,2.03-2.03,5.31,0,7.34,3.77,3.77,8.87,5.88,14.2,5.88,1.29,0,2.35,1.06,2.35,2.35h0c0,1.29-1.06,2.34-2.35,2.34h0ZM17.15,17.15l.76-7.28,26.16,26.16-.76,7.28L17.15,17.15Z"/></svg></div>
            <div dangerouslySetInnerHTML={{__html:data.heroText}} className='paragraph text-2xl md:text-3xl md:w-3/4 xxl:text-5xl'/>
        </div>
        </SoftMotion>
        </div>
        <SoftMotion>
        <div className='relative w-4/5 mx-auto text-center md:w-3/5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.15 42.15"><path fill='white' d="M282.15,42.14c0-3.92-2.09-7.54-5.48-9.49l-21.12-12.19c-3.39-1.96-5.48-5.58-5.48-9.49,0-6.05-4.91-10.96-10.96-10.96H43.05c-6.05,0-10.96,4.91-10.96,10.97,0,3.92-2.09,7.54-5.48,9.49L5.48,32.66C2.09,34.61,0,38.23,0,42.15"/></svg>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-black uppercase pb-1 w-2/4 md:pb-4 md:text-5xl xxl:text-7xl'>WHAT’S ON <BorderMotion /></div>
        </div>
        <div className='bg-white text-black px-8 md:px-10 z-[1] relative mt-[-5px] xxl:px-32'>
            <HightlightEvent image={data.highlightEvents[0].thumbnail.url} title={data.highlightEvents[0].title} intro={data.highlightEvents[0].intro}/>
            <div className='grid md:grid-cols-3 border-t border-black mt-5 md:mt-10'>
                {remainingEvents.map((event, i) => (
                    <motion.div initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ stiffness: 50, duration: 0.7 }}
                    className="relative event-card" key={i}>
                        <div className="relative h-[30vh] w-full md:h-[45vh] xxl:h-[35vh]">
                            <Image src={event.thumbnail.url} objectFit="cover" layout="fill" className='rounded-3xl'/>
                        </div>
                        <div className="mt-5 flex justify-between">
                            <div>
                                <div className="text-xl underline xxl:text-3xl">{event.title}</div>
                                <div className="text-xl md:w-[90%] xxl:text-3xl">{event.intro}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </SoftMotion>
        <div className='bg-white text-black p-8 md:p-10 z-[1] relative mt-[-5px] xxl:p-32'>
        <SoftMotion>
        <div className='md:grid grid-cols-2 bg-white'>
            <div className='relative w-100 h-[45vh] md:h-[60vh] md:mr-24 mb-[25px]'>
            <Image src={data.illustration.url} objectFit='cover' layout='fill' className='rounded-3xl'/>
            </div>
            <div dangerouslySetInnerHTML={{__html: data.pullOutCopy}} className='paragraph md:mr-36 sale-about text-2xl xxl:text-5xl self-center'/>
        </div>
        </SoftMotion>
        </div>
        <Footer shops={shops}/>
        </div>
    )
}
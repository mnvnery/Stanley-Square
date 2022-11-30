import Head from 'next/head'
import Image from 'next/image'
import {request} from '../lib/datocms'
import { HOME_QUERY, EVENTS_QUERY, SHOPS_QUERY } from '../lib/queries'
import { StructuredText } from "react-datocms"
import Button from '../components/Button'
import { EmblaCarousel } from '../components/EmblaCarousel'
import Form from '../components/Form'
import Footer from '../components/Footer'
import SoftMotion from '../components/SoftMotion'
import LeftMotion from '../components/LeftMotion'
import RightMotion from '../components/RightMotion'
import BorderMotion from '../components/BorderMotion'
import { motion } from 'framer-motion'
import TextShape from '../components/TextShape'
import Link from 'next/link'




export async function getStaticProps() {
  const data = await request({
    query: HOME_QUERY,
  })

  const events = await request({
    query: EVENTS_QUERY,
  })

  const shop = await request({
    query: SHOPS_QUERY
  })

  return {
    props: {
      data: data.homePage,
      events: events.allWhatsOns,
      shops: shop.allShops
    },
  }
}

function color(sector) {
  if (sector === 'Retail') {
    return 'tred'
  }
  if (sector === 'Eat & Drink') {
    return 'tgrey'
  }
  if (sector === 'Services') {
    return 'tbrown'
  }
}



export default function Home({data, events, shops}) {
  return (
    <>

        <video autoPlay playsInline loop muted className='object-cover relative h-[40vh] w-screen md:mt-16 md:h-screen'>
          <source src="/bg-video.mp4" />
        </video>
      <LeftMotion>
      <div className='my-12 mx-8 flex md:my-20 xxl:m-32'>
        <div className='relative w-full h-[15vh] md:h-[50vh] md:w-3/4'>
          <Image src='/hero-text.svg' layout='fill' objectFit='contain'/>
        </div>
        <div className='relative h-auto w-10 ml-5 md:ml-20 md:w-20 xxl:w-20'>

          <Image src='/arrow.svg' layout='fill' objectFit='contain'/>
        </div>
      </div>
      </LeftMotion>
      <SoftMotion>

        <div className='relative w-4/5 mx-auto text-center md:w-3/5'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.15 42.15"><path fill='#e4ded4' d="M282.15,42.14c0-3.92-2.09-7.54-5.48-9.49l-21.12-12.19c-3.39-1.96-5.48-5.58-5.48-9.49,0-6.05-4.91-10.96-10.96-10.96H43.05c-6.05,0-10.96,4.91-10.96,10.97,0,3.92-2.09,7.54-5.48,9.49L5.48,32.66C2.09,34.61,0,38.23,0,42.15"/></svg>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-black uppercase pb-3 w-2/4 pt-3 md:pt-10 md:pb-4 md:text-5xl xxl:text-7xl'>About <BorderMotion /></div>
        </div>
        <div className='bg-tbeige text-black z-10 mt-[-1px]'>

          <LeftMotion>
          <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl xxl:text-5xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 xxl:px-32'>
              <div className='relative w-100 h-[45vh] md:h-[70vh]'>
                <Image src={data.image1.url} objectFit='cover' layout='fill' className='rounded-xl'/>
              </div>
              <div dangerouslySetInnerHTML={{__html: data.paragraph1 }} className='paragraph md:mr-20 sale-about'/>
          </div>
          </LeftMotion>
          <RightMotion>
          <div className='grid md:grid-cols-2 pt-12 md:pt-20 pl-10 text-2xl xxl:text-5xl gap-8 md:gap-20 items-center xxl:pl-32'>
              <div dangerouslySetInnerHTML={{__html: data.largerQuote }} className='text-5xl mr-10 md:mr-0 md:text-6xl uppercase xxl:text-8xl'/>
              <div className='relative w-100 h-[35vh] ml-14 md:ml-24 md:h-[55vh]'>
                <Image src={data.image2.url} objectFit='cover' layout='fill'/>
              </div>
          </div>
          </RightMotion>
          <LeftMotion>
          <div className='flex flex-col-reverse md:grid grid-cols-2 pt-12 md:pt-20 px-8 md:px-10 text-2xl xxl:text-5xl md:gap-14'>
              <div className='relative w-100 h-[40vh] md:h-auto'>
                <Image src={data.illustration.url} objectFit='contain' layout='fill' className='rounded-xl'/>
              </div>
              <div>
              <div dangerouslySetInnerHTML={{__html: data.paragraph2 }} className='paragraph mr-8 md:mr-20 xxl:w-[80%]'/>

              <Button text="What's on at Stanley Square" link='whats-on'/>

              </div>
          </div>
          </LeftMotion>
        </div>
        <div className='pt-14 px-8 md:pt-20 md:px-10 xxl:px-32 xxl:pt-32'>
          <SoftMotion>
          <div dangerouslySetInnerHTML={{__html: data.title }} className='text-4xl md:text-6xl uppercase xxl:text-8xl'/>
          <div className='ml-[20vw] md:w-1/3 md:mx-auto py-10'>
            <div dangerouslySetInnerHTML={{__html: data.introSectors }} className='text-2xl paragraph md:text-4xl xxl:text-6xl'/>
          </div>
          </SoftMotion>
          <div className='grid md:grid-cols-3 gap-10 pb-14'>
            {data.sectors.map((sector, i) => (
              <motion.div key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ stiffness: 50, duration: 0.7, delay: `0.${i+i}` }}
              >
                <div className={`uppercase text-5xl text-${color(sector.title)} text-center mb-3 md:mb-0 md:text-left xxl:text-8xl xxl:mb-10`}>{sector.title}</div>

                <Link href={`/${sector.slug}`}>

                <div className='flip-card h-[35vh] md:h-[65vh] w-full cursor-pointer'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front rounded-2xl'>
                      <Image src={sector.thumbnail.url} layout='fill' objectFit='cover' className='rounded-2xl'/>
                    </div>
                    <div className={`flip-card-back bg-${color(sector.title)} text-black rounded-2xl flex flex-col justify-end p-4 xxl:p-10`}>

                      <div dangerouslySetInnerHTML={{__html: sector.intro}} className='text-4xl xxl:text-6xl hover:underline hover:cursor-pointer'/>

                      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.35 13.46" className='w-20 pt-8 pb-4 xxl:w-32 xxl:pt-20'><path d="M37.82,9.04c-1.12,1.12-1.75,2.64-1.75,4.22v.19s18.29-6.73,18.29-6.73L36.07,0V.27c0,1.58,.63,3.1,1.75,4.23h0c.27,.27,.27,.71,0,.98h0c-.27,.27-.71,.27-.98,0l-.08-.08c-1.12-1.12-2.63-1.75-4.21-1.75h0c-.81,0-1.46,.66-1.46,1.46v1.28h-14.48s-2.19-2.7-2.19-2.7H0s2.45,3.02,2.45,3.02L0,9.75H14.41s2.19-2.7,2.19-2.7h14.48s0,1.21,0,1.21c0,.85,.69,1.54,1.54,1.54h0c1.58,0,3.1-.63,4.21-1.75h0c.27-.27,.71-.27,.98,0h0c.27,.27,.27,.71,0,.98h0ZM4.17,6.73l-1.37-1.69H13.78s1.37,1.69,1.37,1.69H4.17Z"/></svg>
                    </div>
                  </div>
                </div>

                </Link>

              </motion.div>
            ))}
          </div>
        </div>
        <SoftMotion>
        <div className='relative h-[50vh] md:h-screen w-full'>
            <Image src={data.whatsOnImage.url} layout='fill' objectFit='cover'/>
          </div>
        </SoftMotion>

        <div className='bg-tbeige text-black p-8 md:p-10 md:pt-14 xxl:px-32 xxl:py-20'>

            <SoftMotion>
              <EmblaCarousel title="What's on at Stanley Square">
                {events.slice(0,6).map((event, i) => (
                  <div className="embla__slide py-8 relative" key={i}>
                    <div className="relative">
                      <div className="relative h-[30vh] w-full md:h-[45vh] xxl:h-[40vh]">
                        <Image src={event.thumbnail.url} objectFit="cover" layout="fill" className='rounded-3xl'/>
                      </div>
                      <div className="mt-5">
                        <div className="text-2xl xxl:text-4xl  md:text-xl underline">{event.title}</div>
                        <div className="text-2xl xxl:text-4xl md:text-xl md:w-[65%]">{event.intro}</div>
                      </div>
                    </div>
                </div>
                ))}
              </EmblaCarousel>
            </SoftMotion>

            <LeftMotion>
              <div className='md:flex justify-between'>
              <div dangerouslySetInnerHTML={{__html: data.introParagraph}} className='text-2xl pt-10 xxl:text-6xl w-5/6 md:text-3xl md:w-3/6 xxl:w-[55%]'/>
              <Button text='Find out more' justify='justify-end' link='whats-on'/>
              </div>
            </LeftMotion>

        </div>
        
        <div className='bg-tbeige pt-5'>
          <div className='relative w-4/5 mx-auto text-center md:w-3/5'>
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.44 57"><path fill='#ff9700' d="M0,57c0-7.03,5.71-12.97,12.75-12.97l18.6,.02c3.68,0,7.18-1.58,9.59-4.36C61.9,15.4,92.87-.03,127.27,0h0c34.41,.03,65.34,15.53,86.27,39.86,2.4,2.79,5.9,4.38,9.58,4.38l18.6,.02c7.03,0,12.73,5.71,12.72,12.75"/></svg>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-black uppercase pb-1 w-2/4 pt-3 md:pt-10 md:pb-4 md:text-5xl xxl:text-7xl'>OFFICE SPACE <BorderMotion /></div>
          </div>
        </div>
        <div className='bg-torange text-black p-8 md:p-10 z-[1] relative mt-[-5px] xxl:p-32'>
          <SoftMotion>
          <div className='md:grid grid-cols-2'>
              <div className='relative w-100 h-[45vh] md:h-[70vh] md:mr-48 mb-[25px]'>
                <Image src={data.officeImage.url} objectFit='cover' layout='fill' className='rounded-3xl'/>
              </div>
              <div dangerouslySetInnerHTML={{__html: data.officeText }} className='paragraph md:mr-36 sale-about text-2xl xxl:text-5xl self-center'/>
          </div>
          </SoftMotion>
        </div>
    
      </SoftMotion>
      <Footer shops={shops}/>
    </>
  )
}

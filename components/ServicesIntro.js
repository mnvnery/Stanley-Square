import Image from "next/image"
import LeftMotion from "./LeftMotion"
import PageTitle from "./PageTitle"
import RightMotion from "./RightMotion"

function color(sector) {
    if (sector === 'Eat & Drink') {
        return 'tgrey'
    }
    if (sector === 'Services') {
        return 'tbrown'
    }
}


const ServicesIntro = ({image1, text1, image2, text2, pullOutQuote, quoteImage, title }) => {
    return (
        <>
        <div className={`bg-${color(title)} text-black pt-10 pb-16 z-[1] relative`}>
            <PageTitle title={title} borderColour='border-black'/>
            <RightMotion>
            <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl xxl:text-5xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 items-center'>
                <div dangerouslySetInnerHTML={{__html: text1 }} className='paragraph md:mr-16 sale-about'/>
                <div className='relative w-full h-[45vh] md:h-[60vh]'>
                    <Image src={image1} objectFit='cover' layout='fill' className='rounded-xl'/>
                </div>
            </div>
            </RightMotion>
            <LeftMotion>
            <div className='flex flex-col px-8 md:px-10 text-2xl xxl:text-5xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-[0.6fr_0.5fr] items-center xxl:gap-24'>
                <div className='relative w-full h-[45vh] md:h-[76vh]'>
                    <Image src={quoteImage} objectFit='contain' layout='fill' className='rounded-xl'/>
                </div>
                <div dangerouslySetInnerHTML={{__html: pullOutQuote }} className='paragraph sale-about uppercase text-4xl md:text-6xl md:mr-12 xxl:text-8xl'/>
            </div>
            </LeftMotion>
            <RightMotion>
            <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl xxl:text-5xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 items-center'>
                <div dangerouslySetInnerHTML={{__html: text2 }} className='paragraph md:mr-32'/>
                <div className='relative w-full h-[45vh] md:h-[60vh]'>
                    <Image src={image2} objectFit='cover' layout='fill' className='rounded-xl'/>
                </div>
            </div>
            </RightMotion>
        </div>
        </>
    )
}
export default ServicesIntro
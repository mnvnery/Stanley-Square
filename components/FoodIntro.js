import Image from "next/image"

function color(sector) {
    if (sector === 'Eat & Drink') {
        return 'tgrey'
    }
    if (sector === 'Services') {
        return 'tbrown'
    }
}


const FoodIntro = ({image1, text1, image2, text2, pullOutQuote, quoteImage, title }) => {
    return (
        <>
        <div className={`bg-${color(title)} text-black pt-10 pb-16`}>
            <div className="border-b border-black md:text-5xl mx-auto text-center w-1/4 uppercase pb-3">
                {title}
            </div>
            <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 items-center'>
                <div className='relative w-100 h-[45vh] md:h-[60vh]'>
                    <Image src={image1} objectFit='cover' layout='fill' className='rounded-xl'/>
                </div>
                <div dangerouslySetInnerHTML={{__html: text1 }} className='paragraph md:mr-32 sale-about'/>
            </div>
            <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-[0.5fr_1fr] items-center'>
                <div dangerouslySetInnerHTML={{__html: pullOutQuote }} className='paragraph md:mr-14 sale-about uppercase md:text-6xl'/>
                <div className='relative w-100 h-[45vh] md:h-[60vh]'>
                    <Image src={quoteImage} objectFit='contain' layout='fill' className='rounded-xl'/>
                </div>
            </div>
            <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 items-center'>
                <div className='relative w-full h-[45vh] md:h-[60vh]'>
                    <Image src={image2} objectFit='cover' layout='fill' className='rounded-xl'/>
                </div>
                <div dangerouslySetInnerHTML={{__html: text2 }} className='paragraph md:mr-32 sale-about'/>
            </div>
        </div>
        </>
    )
}
export default FoodIntro
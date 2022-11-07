import Image from "next/image"
import PageTitle from './PageTitle'
import RightMotion from "./RightMotion"
import SoftMotion from "./SoftMotion"

const ShopIntro = ({image1, text1, image2, text2, textColor, title}) => {
    return (
        <>
        <div className={`bg-tred ${textColor} pt-10 relative z-[1]`}>
            <PageTitle title={title} borderColour='border-black'/>
        <RightMotion>
        <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 xxl:text-5xl'>
            <div dangerouslySetInnerHTML={{__html: text1 }} className='paragraph md:mr-32 sale-about'/>
            <div className='relative w-100 h-[45vh] md:h-[60vh]'>
                <Image src={image1} objectFit='cover' layout='fill' className='rounded-xl'/>
            </div>
        </div>
        </RightMotion>
        <SoftMotion viewport={{once: true}}>
        <div className='pt-10 px-8 md:px-10 text-2xl gap-8 pb-10 md:gap-14 md:pt-20 grid md:grid-cols-2 xxl:text-5xl xxl:py-32'>
            <div className='relative w-100 h-[65vh] md:mt-[-20vh] md:mb-[-62vh] md:h-[135vh] xxl:h-[110vh] xxl:mt-[-25vh]'>
                <Image src={image2} objectFit='contain' layout='fill' className='rounded-xl'/>
            </div>
            <div dangerouslySetInnerHTML={{__html: text2 }} className='paragraph md:mr-28 sale-about xxl:mr-44'/>
        </div>
        </SoftMotion>
        </div>
        <div className="bg-tbeige mt-[-5px]">
            <div className="w-4/5 mx-auto text-center md:w-3/5">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 775.67 126.36"><path fill='#ff4400' d="M0,.03C6.28,32.91,27.14,60.78,55.61,76.5l-.16,49.79,663.94,.06,.16-48.33c28.57-15.53,49.64-45.2,56.13-78.03"/></svg>
            </div>
        </div>
        </>
    )
}
export default ShopIntro
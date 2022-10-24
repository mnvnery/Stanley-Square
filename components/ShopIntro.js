import Image from "next/image"

const ShopIntro = ({image1, text1, image2, text2, textColor, title}) => {
    return (
        <>
        <div className={`bg-tred ${textColor} pt-10`}>
            <div className="border-b border-black md:text-5xl mx-auto text-center w-1/4 uppercase pb-3">
                {title}
            </div>
        <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 '>
            <div dangerouslySetInnerHTML={{__html: text1 }} className='paragraph md:mr-32 sale-about'/>
            <div className='relative w-100 h-[45vh] md:h-[60vh]'>
                <Image src={image1} objectFit='cover' layout='fill' className='rounded-xl'/>
            </div>
        </div>
        <div className='flex flex-col-reverse pt-10 px-8 md:px-10 text-2xl gap-8 md:gap-14 md:pt-20 md:grid grid-cols-2 '>
            <div className='relative w-100 h-[135vh] mt-[-20vh] mb-[-62vh]'>
                <Image src={image2} objectFit='contain' layout='fill' className='rounded-xl'/>
            </div>
            <div dangerouslySetInnerHTML={{__html: text2 }} className='paragraph md:mr-28 sale-about'/>
        </div>
        </div>
        <div className="bg-tbeige">
            <div className="w-4/5 mx-auto text-center md:w-3/5">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 775.67 126.36"><path fill='#ff4400' d="M0,.03C6.28,32.91,27.14,60.78,55.61,76.5l-.16,49.79,663.94,.06,.16-48.33c28.57-15.53,49.64-45.2,56.13-78.03"/></svg>
            </div>
        </div>
        </>
    )
}
export default ShopIntro
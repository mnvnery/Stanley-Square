import Image from "next/image"
import LeftMotion from "./LeftMotion"
const HightlightEvent = ({image, title, intro }) => {
    return (
    <LeftMotion>
    <div className='relative py-10 xxl:py-20'>

        <div className='relative w-5/6 mx-auto mb-5 h-[40vh] md:h-[85vh] xxl:h-[65vh] xxl:w-4/6'>

            <Image src={image} objectFit='cover' layout='fill' className='rounded-4xl'/>
        </div>
        <div className="absolute bottom-0 w-auto xxl:bottom-10 xxl:left-20">
            <div className='relative w-[90%] md:w-[38vw] h-auto xxl:w-[30vw]'>
                <Image src='/orange-shape.svg' width='960px' height='408px'/>
            </div>
            
            <div className="absolute top-2 left-14 flex flex-col justify-between h-full md:top-5 md:left-24 xxl:left-32">
                <div>
                    <div className="text-xl underline md:text-4xl xxl:text-6xl">{title}</div>
                    <div className="text-lg leading-none w-[70%] md:w-[85%] md:text-3xl xxl:text-5xl xxl:mt-4">{intro}</div>
                </div>
            </div>
        </div>
    </div>
    </LeftMotion>
    )
}
export default HightlightEvent
import Image from "next/image"
import LeftMotion from "./LeftMotion"
const HeroSection = ({image, text}) => {
    return (
        <div className="relative h-[50vh] md:h-screen w-screen md:mt-14">
            <Image src={image} objectFit='cover' layout='fill'/>
            <div className="absolute top-14 left-10">
                <LeftMotion><div dangerouslySetInnerHTML={{__html: text}} className='text-4xl md:text-8xl uppercase xxl:text-9xl'/></LeftMotion>
            </div>
        </div>
    )
}
export default HeroSection
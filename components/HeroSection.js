import Image from "next/image"
const HeroSection = ({image, text}) => {
    return (
        <div className="relative h-screen w-screen mt-14">
            <Image src={image} objectFit='cover' layout='fill'/>
            <div className="absolute top-14 left-10">
                <div dangerouslySetInnerHTML={{__html: text}} className='md:text-8xl uppercase'/>
            </div>
        </div>
    )
}
export default HeroSection
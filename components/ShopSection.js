import ShopCard from "./ShopCard"
import Image from "next/image"
import RightMotion from "./RightMotion"
import SoftMotion from "./SoftMotion"
import LeftMotion from "./LeftMotion"

const ShopSection = ({quote, shops, illustration, paddingTop, paddingBottom, colour}) => {
    return (
        <>
        <div className={`bg-tbeige px-8 md:px-10 ${paddingTop} ${paddingBottom} xxl:px-32`}>
            <RightMotion>
            <div className="md:grid grid-cols-2 py-10 md:py-0 md:mb-16 xxl:mb-24">
                <div></div>
                <div dangerouslySetInnerHTML={{__html: quote}} className='text-4xl md:text-6xl text-tred uppercase md:w-2/3 xxl:text-8xl'/>
            </div>
            </RightMotion>
            <div className="grid md:grid-cols-3 gap-10 md:mb-10 xxl:gap-12">
                {shops.map((shop, i) => (
                    <SoftMotion key={i}>
                        <ShopCard title={shop.title} description={shop.description} thumbnail={shop.thumbnail.url} link={`https://${shop.link}`}  colour={colour}/>
                    </SoftMotion>
                ))}
            </div>
            <LeftMotion>
            <div className='relative w-[75vw] mt-10 md:w-[32vw] h-[40vh] md:h-[62vh] ml-[-2em] xxl:w-[35vw]'>
                <Image src={illustration} objectFit='contain' layout='fill' className='rounded-xl'/>
            </div>
            </LeftMotion>
        </div>
        </>
    )
}
export default ShopSection
import ShopCard from "./ShopCard"
import Image from "next/image"

const ShopSection = ({quote, shops, illustration, paddingTop, paddingBottom}) => {
    return (
        <>
        <div className={`bg-tbeige md:px-10 ${paddingTop} ${paddingBottom}`}>
            <div className="md:grid grid-cols-2 md:mb-16">
                <div></div>
                <div dangerouslySetInnerHTML={{__html: quote}} className='text-6xl text-tred uppercase w-2/3'/>
            </div>

            <div className="grid md:grid-cols-3 md:gap-10 md:mb-10">
                {shops.map((shop, i) => (
                    <div key={i}>
                        <ShopCard title={shop.title} description={shop.description} thumbnail={shop.thumbnail.url}/>
                    </div>
                ))}
            </div>
            <div className='relative w-[32vw] h-[40vh] md:h-[62vh] ml-[-2em]'>
                <Image src={illustration} objectFit='contain' layout='fill' className='rounded-xl'/>
            </div>
        </div>
        </>
    )
}
export default ShopSection
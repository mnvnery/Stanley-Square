import Image from "next/image"

const ShopCard = ({title, description, thumbnail}) => {
    return (
        <div className="bg-black text-white rounded-3xl h-full">
            <div className="relative h-[60vh] w-full xxl:h-[50vh]">
                <Image src={thumbnail} objectFit='cover' layout='fill' className="rounded-t-3xl"/>
            </div>
            <div className="px-4 pt-5 pb-10 text-xl xxl:text-4xl xxl:px-8 xxl:py-10">
                <div className="underline">{title}</div>
                <div className="leading-tight mr-5">{description}</div>
            </div>
        </div>
    )
}
export default ShopCard
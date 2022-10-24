import Image from "next/image"
const HightlightEvent = ({image, title, intro }) => {
    return (
    <div className='relative py-10'>
        <div className='relative w-5/6 mx-auto mb-5 h-[40vh] md:h-[65vh]'>
            <Image src={image} objectFit='cover' layout='fill' className='rounded-4xl'/>
        </div>
        <div className="absolute bottom-0 w-auto">
            <div className='relative w-[90%] md:w-[38vw] h-auto'>
                <Image src='/orange-shape.svg' width='960px' height='408px'/>
            </div>
            <div className="absolute top-2 left-14 flex flex-col justify-between h-full md:top-5 md:left-24">
                <div>
                    <div className="text-xl underline md:text-4xl">{title}</div>
                    <div className="text-lg leading-none w-[70%] md:w-[85%] md:text-3xl">{intro}</div>
                </div>
                <div className="mb-8 md:mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.35 13.46" className='w-12 md:w-20 '><path d="M37.82,9.04c-1.12,1.12-1.75,2.64-1.75,4.22v.19s18.29-6.73,18.29-6.73L36.07,0V.27c0,1.58,.63,3.1,1.75,4.23h0c.27,.27,.27,.71,0,.98h0c-.27,.27-.71,.27-.98,0l-.08-.08c-1.12-1.12-2.63-1.75-4.21-1.75h0c-.81,0-1.46,.66-1.46,1.46v1.28h-14.48s-2.19-2.7-2.19-2.7H0s2.45,3.02,2.45,3.02L0,9.75H14.41s2.19-2.7,2.19-2.7h14.48s0,1.21,0,1.21c0,.85,.69,1.54,1.54,1.54h0c1.58,0,3.1-.63,4.21-1.75h0c.27-.27,.71-.27,.98,0h0c.27,.27,.27,.71,0,.98h0ZM4.17,6.73l-1.37-1.69H13.78s1.37,1.69,1.37,1.69H4.17Z"/></svg>
                </div>
            </div>
        </div>
    </div>
    )
}
export default HightlightEvent
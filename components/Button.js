import Link from 'next/link'

const Button = ({text, justify, link}) => {
    return (
        <div className={`flex space-x-5 text-3xl md:text-4xl uppercase mt-12 mb-14 md:mb-24 ${justify} xxl:text-5xl`}><Link href={link}><a className='hover:underline cursor-pointer'>{text}</a></Link> <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.35 13.46" className='w-20 '><path d="M37.82,9.04c-1.12,1.12-1.75,2.64-1.75,4.22v.19s18.29-6.73,18.29-6.73L36.07,0V.27c0,1.58,.63,3.1,1.75,4.23h0c.27,.27,.27,.71,0,.98h0c-.27,.27-.71,.27-.98,0l-.08-.08c-1.12-1.12-2.63-1.75-4.21-1.75h0c-.81,0-1.46,.66-1.46,1.46v1.28h-14.48s-2.19-2.7-2.19-2.7H0s2.45,3.02,2.45,3.02L0,9.75H14.41s2.19-2.7,2.19-2.7h14.48s0,1.21,0,1.21c0,.85,.69,1.54,1.54,1.54h0c1.58,0,3.1-.63,4.21-1.75h0c.27-.27,.71-.27,.98,0h0c.27,.27,.27,.71,0,.98h0ZM4.17,6.73l-1.37-1.69H13.78s1.37,1.69,1.37,1.69H4.17Z"/></svg></div>
    )
}
export default Button
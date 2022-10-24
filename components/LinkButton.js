import Link from "next/link"
const LinkButton = ({color, href, title, router}) => {
    return (
        <div className={`uppercase rounded-full px-6 pb-1 text-3xl border-2 hover:bg-transparent border-${color} 
        ${
            router.pathname == href ? `border-${color} bg-transparent text-${color}` : `bg-${color} text-black hover:text-${color} `
        }`}>
            <Link href={href}><a>{title}</a></Link>
        </div>
    )
}
export default LinkButton
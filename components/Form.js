import Image from "next/image"

const Form = ({title, info}) => {
    return (
        <div className="bg-tgrey p-6 md:p-10">
            <div className="relative h-[18vh] w-auto md:hidden">
                <Image src='/form.png' objectFit='contain' layout='fill' />
                <div className="absolute top-3 left-5 text-3xl uppercase w-2/4">
                    {title}
                </div>
            </div>
            <div className="p-4 md:p-8 md:bg-[url('/form.webp')] bg-cover bg-bottom rounded-4xl">
                <div className="text-xl leading-tight md:text-3xl">
                    <div className="md:grid grid-cols-2 gap-5">
                        <div className="uppercase md:text-6xl hidden md:block">{title}</div>
                        <div dangerouslySetInnerHTML={{__html: info}} className='md:w-3/4'/>
                    </div>
                    <form>
                        <div className="md:grid grid-cols-2 gap-5 mt-5 space-y-2 md:space-y-0">
                            <div className="md:w-1/2">Name</div>
                            <input type="text" id="name" name="name" className="w-full md:w-3/4 text-black px-2 text-xl"/>
                            <div className="md:w-1/2">Email</div>
                            <input type="text" id="email" name="email" className="w-full md:w-3/4 text-black px-2 text-xl"/>
                            <div className="md:w-1/3 flex flex-col justify-between">
                                <div>Comments</div>
                                <div className="bg-white text-black py-2 rounded-full text-center hidden md:block">SUBMIT</div>
                            </div>
                            <textarea type="text" id="comments" name="comments" className="w-full md:w-3/4 h-[18vh] text-black px-2 text-xl"/>
                            <div></div>
                            <div className="bg-white text-black py-2 rounded-full text-center px-10 inline-block md:hidden">SUBMIT</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form
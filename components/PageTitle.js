const PageTitle = ({title, borderColour}) => {
    return (
        <div className={`border-b ${borderColour} text-4xl md:text-5xl mx-auto text-center w-3/5 md:w-1/4 uppercase pb-3`}>
            {title}
        </div>
    )
}
export default PageTitle

import {request} from '../lib/datocms'
import { SERVICESPAGE_QUERY, SHOPS_QUERY } from '../lib/queries'
import ShopSection from '../components/ShopSection'
import HeroSection from '../components/HeroSection'
import ServicesIntro from '../components/ServicesIntro'
import Form from '../components/Form'
import Footer from '../components/Footer'


export async function getStaticProps() {
    const data = await request({
        query: SERVICESPAGE_QUERY,
    })

    const shop = await request({
        query: SHOPS_QUERY,
    })

    return {
        props: {
        data: data.servicesPage,
        shops: shop.allShops
        },
    }
}

function color(sector) {
    if (sector === 'Retail') {
        return 'tred'
    }
    if (sector === 'Eat & Drink') {
        return 'tgrey'
    }
    if (sector === 'Service') {
        return 'tbrown'
    }
}



export default function Services({data, shops}) {
    const filteredShops = shops.filter(shop => shop.category == 'Services');
    const svg = 'M0,0C27.24,53.39,82.79,89.95,146.87,89.95h0c63.33,0,118.31-37.59,145.9-89.95'
    const viewBox = '0 0 555.25 92.02'

    return (  
        <>
            <HeroSection image={data.heroImg.url} text={data.heroText} />
            <ServicesIntro title='Services' image1={data.image1.url} image2={data.image2.url} text1={data.paragraph1} text2={data.paragraph2} pullOutQuote={data.pullOutQuote} quoteImage={data.quoteImage.url} svgPath={svg} viewBox={viewBox} />
            <div className="bg-tbeige mt-[-10px]">
            <div className="w-4/5 mx-auto text-center md:w-3/6">
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><polyline fill='#d48330' points="0 0 0 92.02 19.83 72.19 39.66 92.02 59.49 72.19 79.32 92.02 99.15 72.19 118.98 92.02 138.81 72.19 158.64 92.02 178.47 72.19 198.3 92.02 218.13 72.19 237.96 92.02 257.79 72.19 277.63 92.02 297.46 72.19 317.29 92.02 337.12 72.19 356.95 92.02 376.78 72.19 396.61 92.02 416.44 72.19 436.27 92.02 456.1 72.19 475.93 92.02 495.76 72.19 515.59 92.02 535.42 72.19 555.25 92.02 555.25 0"/></svg>
                </div>
            </div>
            <ShopSection quote={data.shopsIntro} shops={filteredShops} illustration={data.illustration.url} colour="tbrown" paddingBottom='pb-5' />
            <div className="hidden hover:bg-tbrown">hi</div>
            <Footer shops={shops}/>
        </>
    )
}
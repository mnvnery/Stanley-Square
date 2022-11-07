
import {request} from '../lib/datocms'
import { FOODPAGE_QUERY, SHOPS_QUERY } from '../lib/queries'
import ShopSection from '../components/ShopSection'
import HeroSection from '../components/HeroSection'
import FoodIntro from '../components/FoodIntro'
import Form from '../components/Form'
import Footer from '../components/Footer'


export async function getStaticProps() {
    const data = await request({
        query: FOODPAGE_QUERY,
    })

    const shop = await request({
        query: SHOPS_QUERY,
    })

    return {
        props: {
        data: data.eatDrinkPage,
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

export default function EatDrink({data, shops}) {
    const filteredShops = shops.filter(shop => shop.category == 'Eat&Drink');
    const svg = 'M0,0C27.24,53.39,82.79,89.95,146.87,89.95h0c63.33,0,118.31-37.59,145.9-89.95'
    const viewBox = '0 0 292.77 89.95'
    return (  
        <>
            <HeroSection image={data.heroImg.url} text={data.heroText} />
            <FoodIntro title='Eat & Drink' image1={data.image1.url} image2={data.image2.url} text1={data.paragraph1} text2={data.paragraph2} pullOutQuote={data.pullOutQuote} quoteImage={data.quoteImage.url} svgPath={svg} viewBox={viewBox} />
            <div className="bg-tbeige mt-[-2px]">
            <div className="w-4/5 mx-auto text-center md:w-4/12">
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path fill='#929292' d={svg} /></svg>
                </div>
            </div>
            <ShopSection shops={filteredShops} illustration={data.illustration.url} paddingBottom="pb-10" />
            <Footer shops={shops}/>
        </>
    )
}
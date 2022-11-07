
import {request} from '../lib/datocms'
import { SHOPPAGE_QUERY, SHOPS_QUERY } from '../lib/queries'
import ShopSection from '../components/ShopSection'
import HeroSection from '../components/HeroSection'
import ShopIntro from '../components/ShopIntro'
import Footer from '../components/Footer'
import Form from '../components/Form'


export async function getStaticProps() {
    const data = await request({
        query: SHOPPAGE_QUERY,
    })

    const shop = await request({
        query: SHOPS_QUERY,
    })

    return {
        props: {
        data: data.shopPage,
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



export default function Retail({data, shops}) {
    const filteredShops = shops.filter(shop => shop.category == 'Retail');
    return (  
        <>
            <HeroSection image={data.heroImg.url} text={data.heroText} />
            <ShopIntro title='Shop' image1={data.image1.url} image2={data.image2.url} text1={data.paragraph1} text2={data.paragraph2} bgColor='bg-tred' textColor='text-black'/>
            <ShopSection quote={data.shopsIntro} shops={filteredShops} illustration={data.illustration.url} paddingTop='md:pt-20' />
            <Footer shops={shops}/>
        </>
    )
}
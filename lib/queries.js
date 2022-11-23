export const HOME_QUERY = `{
    homePage {
        heroImg {
            url
        }
        illustration {
            url
        }
        image1 {
            url
        }
        image2 {
            url
        }
        heroIntro {
            value
        }
        introParagraph
        introSectors
        largerQuote
        officeImage {
            url
        }
        officeText
        paragraph1
        paragraph2
        sectors {
            intro
            thumbnail {
            url
            }
            title
            colour {
                hex
            }
            slug
        }
        title
        whatsOnImage {
            url
        }
        officeImage {
            url
        }
        officeText
        formTitle
        formInfo
        }
    }`

export const EVENTS_QUERY = `{
    allWhatsOns {
        title
        intro
        thumbnail {
            url
        }
    }
}`

export const SHOPS_QUERY = `{
    allShops(first: 100) {
        title
        thumbnail {
            url
        }
        description
        category
        link
    }
}`

export const SHOPPAGE_QUERY = `{
    shopPage {
        heroText
        heroImg {
            url
        }
        paragraph1
        paragraph2
        image1 {
            url
        }
        image2 {
            url
        }
        shopsIntro
        illustration {
            url
        }
        formTitle
        formInfo
    }
}`


export const FOODPAGE_QUERY = `{
    eatDrinkPage {
        heroText
        heroImg {
            url
        }
        paragraph1
        paragraph2
        image1 {
            url
        }
        image2 {
            url
        }
        pullOutQuote
        quoteImage {
            url
        }
        illustration {
            url
        }
        formTitle
        formInfo
    }
}`

export const SERVICESPAGE_QUERY = `{
    servicesPage {
        heroText
        heroImg {
            url
        }
        paragraph1
        paragraph2
        image1 {
            url
        }
        image2 {
            url
        }
        pullOutQuote
        quoteImage {
            url
        }
        illustration {
            url
        }
        formTitle
        formInfo
    }
}`


export const VISITPAGE_QUERY = `{
    visitUsPage {
        address
        accessibility
        faqs {
            question
            answer
        }
        howToGetHere {
            title
            info
        }
        heroText
        heroImage {
            url
        }
        lateNightShopping
        largeImage {
            url
        }
        openingTimes {
            day
            times
        }
        formTitle
        formInfo
    }
}`

export const OFFICESPAGE_QUERY = `{
    officesPage {
        heroImage {
            url
        }
        largeParagraph
        smallerParagraph
        image1 {
            url
        }
        pullOut
        pages {
            url
            width
            height
        }
        features {
            title
            info
            thumbnail {
                url
            }
        }
        largeImage {
            url
        }
        formTitle
        formInfo
    }
}`

export const EVENTSPAGE_QUERY = `{
    whatsOnPage {
        heroHeader
        heroText
        highlightEvents {
            thumbnail {
                url
            }
            title
            intro
        }
        pullOutCopy
        illustration {
            url
        }
        formTitle
        formInfo
    }
}`
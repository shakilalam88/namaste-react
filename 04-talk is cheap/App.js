import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/* 
 --Header
   -Logo
   -Nav items
 --Body
   -Search bar
   -RestaurantContainer
     -RestaurantCard
 --Footer
   -CopyRight
   -Links
   -Address
   -Contact
*/
const resObj = {
  type: 'restaurant',
  data: {
    type: 'F',
    id: '223243',
    name: 'KFC',
    cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
    cuisines: ['Burgers', 'Biryani'],
    avgRating: 4.3,
    costForTwo: '₹400 for two',
    areaName: 'Rohini',
    locality: 'Sector 3',
    parentId: '547',
  },
}
const resList = [
  {
    info: {
      id: '25182',
      name: 'BTW',
      cloudinaryImageId: 'c4ai8pwgz1pemtw8gnpq',
      locality: 'Rohini',
      areaName: 'Rohini',
      costForTwo: '₹300 for two',
      cuisines: ['Street Food', 'North Indian', 'Sweets'],
      avgRating: 4.2,
      veg: true,
      parentId: '10314',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/btw-rohini-delhi-25182',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '69465',
      name: 'Starbucks Coffee',
      cloudinaryImageId: '2418209798927d733a50f5d2ebcc2aee',
      locality: 'Pearls Business Park',
      areaName: 'Netaji Subhash Place',
      costForTwo: '₹400 for two',
      cuisines: [
        'Beverages',
        'Cafe',
        'Snacks',
        'Desserts',
        'Bakery',
        'Ice Cream',
      ],
      avgRating: 4.3,
      parentId: '195515',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.4,
        serviceability: 'SERVICEABLE',
        slaString: '30 mins',
        lastMileTravelString: '6.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 23:30:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/starbucks-coffee-pearls-business-park-netaji-subhash-place-delhi-69465',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '355895',
      name: 'Chaayos Chai+Snacks=Relax',
      cloudinaryImageId: 'cace805a6ba74137571d0f7ac92302b1',
      locality: 'ARSS Mall',
      areaName: 'Paschim Vihar',
      costForTwo: '₹250 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Chaat',
        'Desserts',
        'Home Food',
        'Italian',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'Sweets',
      ],
      avgRating: 4.4,
      parentId: '281782',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.5,
        serviceability: 'SERVICEABLE',
        slaString: '30 mins',
        lastMileTravelString: '5.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 01:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-arss-mall-paschim-vihar-delhi-355895',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '10392',
      name: 'Subway',
      cloudinaryImageId: '63178e3e64d503a479f2a2048a474552',
      locality: 'Sector 3',
      areaName: 'Rohini',
      costForTwo: '₹350 for two',
      cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
      avgRating: 4.2,
      parentId: '2',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '21 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 04:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '10208',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'Sector 10',
      areaName: 'Rohini',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.3,
      parentId: '166',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.3,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '2.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 06:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹139',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-king-sector-10-rohini-delhi-10208',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '253731',
      name: "McDonald's",
      cloudinaryImageId: '535fc9f9c135f7982317bbb6a64a1ffc',
      locality: 'Sector 3',
      areaName: 'Rohini',
      costForTwo: '₹400 for two',
      cuisines: ['American'],
      avgRating: 4.4,
      parentId: '630',
      avgRatingString: '4.4',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 23:45:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/mcdonalds-sector-3-rohini-delhi-253731',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '23572',
      name: "Baljeet's Amritsari Koolcha",
      cloudinaryImageId: 'e458a26a0909a02111fb00c896c50ab1',
      locality: 'BG8th Block',
      areaName: 'Paschim Vihar',
      costForTwo: '₹350 for two',
      cuisines: ['North Indian', 'Snacks', 'Desserts', 'Indian'],
      avgRating: 4.3,
      veg: true,
      parentId: '2689',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.7,
        serviceability: 'SERVICEABLE',
        slaString: '34 mins',
        lastMileTravelString: '5.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 22:40:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/baljeets-amritsari-koolcha-bg8th-block-paschim-vihar-delhi-23572',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '544771',
      name: 'Vadilal Ice Creams',
      cloudinaryImageId: 'd7ewtcbeubbob11qydqx',
      locality: 'Sector 3',
      areaName: 'Rohini',
      costForTwo: '₹200 for two',
      cuisines: ['Ice Cream', 'Desserts'],
      avgRating: 3.8,
      veg: true,
      parentId: '11745',
      avgRatingString: '3.8',
      totalRatingsString: '10+',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.1,
        serviceability: 'SERVICEABLE',
        slaString: '17 mins',
        lastMileTravelString: '0.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/vadilal-ice-creams-sector-3-rohini-delhi-544771',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '51753',
      name: 'Everbake',
      cloudinaryImageId: 'ggotmnuexemu73hx0c37',
      locality: 'Vashisht Kumar Gulla Marg',
      areaName: 'Punjabi Bagh',
      costForTwo: '₹500 for two',
      cuisines: ['North Indian', 'Snacks', 'Desserts'],
      avgRating: 4.4,
      veg: true,
      parentId: '4772',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.5,
        serviceability: 'SERVICEABLE',
        slaString: '34 mins',
        lastMileTravelString: '7.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹75',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/everbake-vashisht-kumar-gulla-marg-punjabi-bagh-delhi-51753',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '36279',
      name: 'Bille Di Hatti',
      cloudinaryImageId: 'xovqdwufznyil35jg602',
      locality: 'RP Block',
      areaName: 'Pitampura',
      costForTwo: '₹100 for two',
      cuisines: ['Street Food', 'Snacks', 'North Indian'],
      avgRating: 4.1,
      veg: true,
      parentId: '4639',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 6.2,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '6.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 19:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/bille-di-hatti-rp-block-pitampura-delhi-36279',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '43183',
      name: 'NutrioBox',
      cloudinaryImageId: 'jxvudyzszkjqnk6fxb8b',
      locality: 'Sector 14',
      areaName: 'Prashant Vihar',
      costForTwo: '₹450 for two',
      cuisines: ['Healthy Food', 'Salads', 'Continental'],
      avgRating: 4.3,
      parentId: '5349',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.6,
        serviceability: 'SERVICEABLE',
        slaString: '34 mins',
        lastMileTravelString: '5.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 00:31:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/nutriobox-sector-14-prashant-vihar-delhi-43183',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '326440',
      name: 'Punjabi Angithi (Vegorama Group)',
      cloudinaryImageId: 'g2pklvjnapzfoc4ackou',
      locality: 'Paschim Vihar',
      areaName: 'Paschim Vihar',
      costForTwo: '₹400 for two',
      cuisines: [
        'North Indian',
        'Chinese',
        'Tandoor',
        'Punjabi',
        'Thalis',
        'Snacks',
      ],
      avgRating: 4.2,
      veg: true,
      parentId: '465050',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/punjabi-angithi-vegorama-group-paschim-vihar-delhi-326440',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '91817',
      name: 'Burgrill - The Win Win Burger',
      cloudinaryImageId: 'f596863116da4b4688b48e813e25000d',
      locality: 'Pitampura',
      areaName: 'Pitampura',
      costForTwo: '₹250 for two',
      cuisines: [
        'Burgers',
        'Healthy Food',
        'Salads',
        'Beverages',
        'Desserts',
        'Snacks',
      ],
      avgRating: 4.3,
      parentId: '302366',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.5,
        serviceability: 'SERVICEABLE',
        slaString: '28 mins',
        lastMileTravelString: '4.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 05:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-pitampura-delhi-91817',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '58215',
      name: 'Theobroma',
      cloudinaryImageId: '63dd75492c47fcec191132b8eb299ea5',
      locality: 'Punjabi Bagh',
      areaName: 'Punjabi Bagh',
      costForTwo: '₹400 for two',
      cuisines: ['Bakery', 'Desserts'],
      avgRating: 4.6,
      parentId: '1040',
      avgRatingString: '4.6',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.3,
        serviceability: 'SERVICEABLE',
        slaString: '36 mins',
        lastMileTravelString: '7.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 00:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/theobroma-punjabi-bagh-delhi-58215',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '26723',
      name: 'KFC',
      cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
      locality: 'Sector 3',
      areaName: 'Rohini',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      avgRating: 4.3,
      parentId: '547',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 05:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '443492',
      name: 'EatFit',
      cloudinaryImageId: 'a564ace38895abd960157ac2a76aaf2a',
      locality: 'Sector 7',
      areaName: 'Rohini',
      costForTwo: '₹250 for two',
      cuisines: [
        'Chinese',
        'Healthy Food',
        'Tandoor',
        'Pizzas',
        'North Indian',
        'Thalis',
        'Biryani',
      ],
      avgRating: 4.3,
      parentId: '76139',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 01:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹90',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/eatfit-sector-7-rohini-delhi-443492',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '193493',
      name: "Haldiram's",
      cloudinaryImageId: 'bczz5ti3gpe2hfnvsgg4',
      locality: 'Rohini',
      areaName: 'Rohini',
      costForTwo: '₹350 for two',
      cuisines: ['Snacks', 'North Indian', 'Sweets'],
      avgRating: 4.3,
      parentId: '377669',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.2,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '2.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 03:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/haldirams-rohini-delhi-193493',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '62876',
      name: 'LunchBox - Meals and Thalis',
      cloudinaryImageId: 'dr7zk0fge6mhr6xtsfat',
      locality: 'Sector 8',
      areaName: 'Rohini',
      costForTwo: '₹200 for two',
      cuisines: [
        'Biryani',
        'North Indian',
        'Punjabi',
        'Healthy Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.2,
      parentId: '4925',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.7,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '2.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹159',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sector-8-rohini-delhi-62876',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '345367',
      name: 'Cafe Coffee Day',
      cloudinaryImageId: 'b70c7d23d197251b7b315b7e4d8173ae',
      locality: 'Sector 10',
      areaName: 'Rohini',
      costForTwo: '₹400 for two',
      cuisines: [
        'Beverages',
        'Cafe',
        'Snacks',
        'Desserts',
        'Burgers',
        'Ice Cream',
        'Bakery',
        'Fast Food',
      ],
      avgRating: 4.3,
      parentId: '1',
      avgRatingString: '4.3',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-18 22:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/cafe-coffee-day-sector-10-rohini-delhi-345367',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '14413',
      name: 'Keventers - Milkshakes & Desserts',
      cloudinaryImageId: '1c8517dc925655dfff4d3617bd2191a5',
      locality: '10th Sector',
      areaName: 'Rohini',
      costForTwo: '₹200 for two',
      cuisines: ['Beverages', 'Ice Cream', 'Desserts', 'Healthy Food'],
      avgRating: 4.4,
      veg: true,
      parentId: '268997',
      avgRatingString: '4.4',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-03-19 02:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-10th-sector-rohini-delhi-14413',
      type: 'WEBLINK',
    },
  },
]

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
      </div>
      <div className="header-nav">
        <ul className="header-nav-items">
          <li className="header-nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="header-nav-item">
            <a href="#about">About</a>
          </li>
          <li className="header-nav-item">
            <a href="#menu">Menu</a>
          </li>
          <li className="header-nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
const CardBg = {
  backgroundColor: '#f0f0f0',
}
const RestauranCard = ({ resData }) => {
  return (
    <>
      {resData.map((data) => {
        const { id, name, cuisines, avgRating, cloudinaryImageId } = data.info
        return (
          <div
            className="res-card"
            key={id}
          >
            <img
              src={
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                cloudinaryImageId
              }
              alt=""
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating}</h5>
            <h5>38 minutes</h5>
          </div>
        )
      })}
    </>
  )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestauranCard resData={resList} />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<AppLayout />)

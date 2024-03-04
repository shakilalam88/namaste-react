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
const resData ={
                    "info": {
                      "id": "40415",
                      "name": "Bikanervala",
                      "cloudinaryImageId": "bhb6fmjbetmpa2nh3w0t",
                      "locality": "Ring Road",
                      "areaName": "Rohini",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "Snacks",
                        "Chaat",
                        "Sweets"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "45936",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": { },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/bikanervala-ring-road-rohini-delhi-40415",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "422512",
                      "name": "Chicago Pizza",
                      "cloudinaryImageId": "nzjxdkb00xw7sjqbcks2",
                      "locality": "Netaji Subhash Place",
                      "areaName": "Netaji Subhash Place",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Fast Food"
                      ],
                      "avgRating": 3.8,
                      "parentId": "60277",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 6.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "6.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 22:45:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/chicago-pizza-netaji-subhash-place-delhi-422512",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "326440",
                      "name": "Punjabi Angithi (Vegorama Group)",
                      "cloudinaryImageId": "g2pklvjnapzfoc4ackou",
                      "locality": "Paschim Vihar",
                      "areaName": "Paschim Vihar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Tandoor",
                        "Punjabi",
                        "Thalis",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "465050",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/punjabi-angithi-vegorama-group-paschim-vihar-delhi-326440",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "341033",
                      "name": "Bakingo",
                      "cloudinaryImageId": "fa68ac0434f668bba1322abda36570b3",
                      "locality": "Rithala",
                      "areaName": "Rohini",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "parentId": "3818",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 00:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/bakingo-rithala-rohini-delhi-341033",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "26723",
                      "name": "KFC",
                      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                      "locality": "Sector 3",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "547",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 05:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "253731",
                      "name": "McDonald's",
                      "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
                      "locality": "Sector 3",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:45:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-3-rohini-delhi-253731",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "55473",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Sector 10",
                      "areaName": "Rohini",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4,
                      "parentId": "721",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 04:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-10-rohini-delhi-55473",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10392",
                      "name": "Subway",
                      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                      "locality": "Sector 3",
                      "areaName": "Rohini",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10208",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "Sector 10",
                      "areaName": "Rohini",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "21 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 06:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/burger-king-sector-10-rohini-delhi-10208",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "239435",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "tolejbnae10pq0udbavn",
                      "locality": "New delhi",
                      "areaName": "Paschim Vihar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "4961",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "31 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 05:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-new-paschim-vihar-delhi-239435",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "332220",
                      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                      "cloudinaryImageId": "lzwvtmhfclg1cpbskhbi",
                      "locality": "Madipur Village",
                      "areaName": "Punjabi Bagh",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "582",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 6.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "33 mins",
                        "lastMileTravelString": "6.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 22:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-madipur-village-punjabi-bagh-delhi-332220",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "58215",
                      "name": "Theobroma",
                      "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
                      "locality": "Punjabi Bagh",
                      "areaName": "Punjabi Bagh",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 7.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "36 mins",
                        "lastMileTravelString": "7.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/theobroma-punjabi-bagh-delhi-58215",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "295598",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "myema8clt6ccf0oztxvz",
                      "locality": "Aggarwal Millenium Tower",
                      "areaName": "Netaji Subhash Place",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "2093",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 6.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "28 mins",
                        "lastMileTravelString": "6.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-02 00:45:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-aggarwal-millenium-tower-netaji-subhash-place-delhi-295598",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "62876",
                      "name": "LunchBox - Meals and Thalis",
                      "cloudinaryImageId": "dr7zk0fge6mhr6xtsfat",
                      "locality": "Sector 8",
                      "areaName": "Rohini",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Punjabi",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "4925",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹159"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sector-8-rohini-delhi-62876",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "194367",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                      "locality": "Netaji Subhash Place",
                      "areaName": "Netaji Subhash Place",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "1776",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 7.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "36 mins",
                        "lastMileTravelString": "7.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 22:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/wow-momo-netaji-subhash-place-delhi-194367",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "15846",
                      "name": "Faasos - Wraps, Rolls & Shawarma",
                      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                      "locality": "Sector 8",
                      "areaName": "Rohini",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "21809",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-sector-8-rohini-delhi-15846",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "15666",
                      "name": "Behrouz Biryani",
                      "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
                      "locality": "Sector 8",
                      "areaName": "Pushpanjali",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "1803",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/behrouz-biryani-sector-8-pushpanjali-delhi-15666",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "302687",
                      "name": "Barbeque Nation",
                      "cloudinaryImageId": "bav18jquonl2rlquifhz",
                      "locality": "Rohini",
                      "areaName": "Rohini",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian",
                        "Barbecue",
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                      ],
                      "avgRating": 3.8,
                      "parentId": "2438",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:30:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/barbeque-nation-rohini-delhi-302687",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "22490",
                      "name": "Pikwik Since 1991",
                      "cloudinaryImageId": "poh1opazxy5csaflmftz",
                      "locality": "Rohini",
                      "areaName": "Rohini",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Continental"
                      ],
                      "avgRating": 4.2,
                      "parentId": "7462",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:59:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pikwik-since-1991-rohini-delhi-22490",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "157772",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
                      "locality": "Sector 8",
                      "areaName": "Rohini",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "7918",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-01 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { }
                    },
                    "analytics": { },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-good-bowl-sector-8-rohini-delhi-157772",
                      "type": "WEBLINK"
                    }
 
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
const RestauranCard = (props) => {
  return (
    <div
      className="res-card"
      style={CardBg}
    >
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nzjxdkb00xw7sjqbcks2"
        alt=""
      />
      <h3>{props.resName}</h3>
      <h5>{props.cuisine}</h5>
      <h5>4.4 stars</h5>
      <h5>38 minutes</h5>
    </div>
  )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestauranCard
          resName="Meghna food"
          cuisine="Biryani, North Indian"
        />
        <RestauranCard
          resName="kfc"
          cuisine="chicken food"
        />
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

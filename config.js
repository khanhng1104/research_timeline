var config = {
    style: 'mapbox://styles/mapbox/light-v11',
    accessToken: 'pk.eyJ1Ijoia2hhbmhuZzExMDQiLCJhIjoiY2xrdWRuZm55MGVyNjNlcGRjOTg1eHdsNSJ9.77Ca_pdxm05cUM4TTKzQlg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Unveiling Footscray Past',
    subtitle: "Step back in time and discover Footscray's fascinating heritage journey",
   /* byline: 'By Khanh Nguyen',*/
    footer: 
    'Research by Khanh Nguyen<br><br>TEMPLATE BY <br> <br> John Branigan on the <a href="solutions_architecture@mapbox.com" target="_blank">Solutions Architecture Team</a> <br> <br> ACKNOWLEDGEMENT <br> <br> Lo Bénichou for the idea, support and awesome feedback throughout the design and build process <br> Paige Moody and Lem Thornton for early testing and feedback <br> Chris Toomey for ushering this work through and keeping things on track <br> Journalists with stories that help us make sense of what goes around us <br> Digital Democracy and Rudo Kemper for their fork that inspired many later features <br> Paul Franz for developing customizations and providing feedback. <br> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            "id": "wurundjeri-presence",
            "alignment": "left",
            "hidden": false,
            "title": "Before 1830s: Indigenous Wurundjeri Presence",
            "image": "https://livingmuseum.org.au/wp-content/uploads/2022/09/site-abor-barak.jpeg",
            "description": "Footscray was originally inhabited by the Wurundjeri people of the Kulin Nation. The Maribyrnong River area was a vital resource for food and water, and the Wurundjeri lived harmoniously with the land for thousands of years.",
            "location": {
                "center": [144.89069, -37.79958],
                "zoom": 12.75,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": false,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "railway-station",
            "alignment": "right",
            "hidden": false,
            "title": "1859: Opening of Footscray Railway Station",
            "image": "https://collections.museumsvictoria.com.au/content/media/39/419239-large.jpg",
            "description": "The Footscray Railway Station, opened in 1859, was pivotal for the suburb's growth. It connected Footscray to Melbourne, facilitating the movement of people and goods, and contributing significantly to local development.",
            "location": {
                "center": [144.90195, -37.80123],
                "zoom": 15.70,
                "pitch": 56.48,
                "bearing": 27.99
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": true,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "drill-hall",
            "alignment": "left",
            "hidden": false,
            "title": "1888: Construction of Former Footscray Drill Hall",
            "image": "https://www.ghosttourbookings.com.au/resources/products/289e0f4a-e35b-4ee4-bef8-98eb0ad1a859_lg.jpg",
            "description": "The Former Footscray Drill Hall, built in 1888, was used for military training and community events. It represents Footscray's role in defense and community organization during a period of rapid industrial growth.",
            "location": {
                "center": [144.88787, -37.79892],
                "zoom": 18.07,
                "pitch": 56.48,
                "bearing": 27.99
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": false,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "town-hall",
            "alignment": "right",
            "hidden": false,
            "title": "1936: Completion of Footscray Town Hall",
            "image": "https://scontent.fmel15-2.fna.fbcdn.net/v/t1.6435-9/66193592_1806556472781013_3617515992663457792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aT5Yqiin2XEQ7kNvgFy0NPi&_nc_ht=scontent.fmel15-2.fna&oh=00_AYC2EqX8OAwx-_fRPoGdsxyec_NS5bCuKbbwr7djN1JvzA&oe=66744DC6",
            "description": "Completed in 1936, the Footscray Town Hall served as a civic and community hub. It symbolizes the suburb's development into an established and proud community with a distinct identity.",
            "location": {
                "center": [144.90064, -37.80458],
                "zoom": 17.52,
                "pitch": 56.48,
                "bearing": 27.99
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": false,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "footscray-market",
            "alignment": "left",
            "hidden": false,
            "title": "1950s: Establishment of Footscray Market",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OMO60yErkf4FyvU71AGgADNftTC9ehJVINImfsH9ww&s",
            "description": "Opened in the 1950s, Footscray Market became a bustling hub for diverse communities. It reflects the post-WWII influx of immigrants who brought with them rich cultural traditions and significantly shaped the local economy.",
            "location": {
                "center": [144.90073, -37.80085],
                "zoom": 17.20,
                "pitch": 56.48,
                "bearing": 27.99
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": false,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "little-saigon",
            "alignment": "right",
            "hidden": false,
            "title": "1970s: Development of Little Saigon Precinct",
            "image": "https://i.redd.it/e8evmka0ubv91.jpg",
            "description": "Emerging in the 1970s, the Little Saigon Precinct became a vibrant cultural center for the Vietnamese community. It showcases Footscray's multicultural evolution and is known for its bustling markets and authentic Vietnamese cuisine.",
            "location": {
                "center": [144.89970, -37.79921],
                "zoom": 18.57,
                "pitch": 65.97,
                "bearing": 0.00
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": false,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "whitten-oval",
            "alignment": "left",
            "hidden": false,
            "title": "Mid-20th Century: Whitten Oval as a Sports Venue",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IOPSybNAmwJeiY_HoH1VseeYF8CG5TtaRUCE8F49CQ&s",
            "description": "Whitten Oval, established as the home of the Western Bulldogs AFL team, represents Footscray's strong sporting culture and community spirit. It has been a significant venue for local and national sports events.",
            "location": {
                "center": [144.88657, -37.79964],
                "zoom": 16.75,
                "pitch": 61.98,
                "bearing": -23.99
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": false,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "arts-centre",
            "alignment": "right",
            "hidden": false,
            "title": "1974: Opening of Footscray Community Arts Centre",
            "image": "https://images.squarespace-cdn.com/content/v1/5cac1ff9348cd9183d114f13/1564984913808-9ERAZ65CUFI1A45XMWKI/Henderson+House+image2pg.jpg",
            "description": "Established in 1974, the Footscray Community Arts Centre has been a key venue for fostering local arts and culture. It supports artistic expression and cultural activities, serving as a community hub for creativity and innovation.",
            "location": {
                "center": [144.90776, -37.80288],
                "zoom": 16.73,
                "pitch": 66.97,
                "bearing": 40.78
            },
            "mapAnimation": "flyTo",
            "rotateAnimation": false,
            "callback": "",
            "onChapterEnter": [],
            "onChapterExit": []
        },
        {
            "id": "heavenly-queen",
            "alignment": "left",
            "hidden": false,
            "title": "Early 2000s: Construction of Heavenly Queen Temple",
            "image": "https://heavenlyqueentemple.com.au/assets/dji_0187-hdr.jpg",
            "description": "Constructed in the early 2000s, the Heavenly Queen Temple highlights the ongoing multicultural development of Footscray. It serves as a place of worship and a cultural landmark for the local Chinese community.",
            "location": {
                "center": [144.91406, -37.79868],
                "zoom": 17.06,
                "pitch": 60.98,
                "bearing": 12.86
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'end-text',
            alignment: 'fully',
            hidden: false,
            "hidden": false,
            "title": "Start Exploring Footscray's Heritage Today!",
            "image": "https://www.victorianplaces.com.au/sites/default/files/styles/watermarked/public/exhibits/V2394.jpg?itok=bp6Kr9YL",
            "description": "Thank you for embarking on this journey through Maribyrnong's rich history with us. Keep exploring, discovering, and celebrating the diverse heritage that makes our community unique.",
            location: {
                center: [144.89069, -37.79958],
                zoom: 12.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

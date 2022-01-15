var config = {
    style: 'mapbox://styles/laalkebsi/ckx49n85e3dbs14o75wmsj8e0',
    accessToken: 'pk.eyJ1IjoibGFhbGtlYnNpIiwiYSI6ImNrcGhlanozcDJkZjYyb2xhbzdzNHZtNG0ifQ.hlv9qbU0_uNEMZMW3QutaQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Visualizing War',
    subtitle: 'Placing Yemen’s Heritage Destruction on the Map',
    byline: 'By Azal',
    footer: 'This platform is dedicated to Muhannad Al-Sayani, the director of the Yemeni General Organization of Antiquities and Museums (GOAM), whose list of sites made this research possible. Al-Sayani passed away on August 10, 2020 at age 58. This project intends to continue his legacy by expanding once there is further documetation of site destruction or damage. He will be sorely missed.',
    chapters: [
        {
          id: 'Background',
          alignment: 'left',
          hidden: false,
          title: 'Background',
          image: '',
          description: '<p> Yemen, the birthplace of Arab civilization and home to the Queen of Sheba, has a civilization that stretches back 3,000 years. For millennia, the country&#39s traditional masons passed on their local skills and craftsmanship, creating unique spaces and architecture that provided a sense of belonging and protected inhabitants. </p> <p>During the 2011 Arab Spring, Yemen received media attention following a civil unrest initiated by the Houthis that eventually led to the resignation of President Saleh in 2012. With the Houthis gradually gaining more control of the country, Saudi Arabia formed a coalition of eight Arab nations to defeat the Houthis in March of 2015, with weapon and intelligence aid from the U.S. and the U.K. The results were disastrous, with thousands of civilians dead and millions in need of humanitarian aid. </p>',
          location: {
            center: [44.44949, 15.99707],
            zoom: 5.87,
            pitch: 0,
            bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
              layer: 'all-spread-out-stroke',
              opacity: 1,
            },
          ],
          onChapterExit: [
            {
              layer: 'all-spread-out-stroke',
              opacity: 0,
            },
          ],
        },
        {
            id: 'chap2',
            alignment: 'left',
            hidden: false,
            title: 'The Heritage',
            image: '',
            description: '<p> A related but lesser-known crisis that Yemen has been going through is its destruction of heritage. While Yemen is familiar with heritage destruction over years of damages from civic tension, extremists, and preservation mismanagement, numbers of destroyed sites have skyrocketed since the Saudi coalition. </p> <p> This project aims to visualize the effects of Yemen war on cultural heritage professionals in the first two years after the Coalition, using Yemeni professional&#39s list of destroyed sites and give each confirmed site its deserved place on the map. As a result, the aim of this project is to provide an independent resource, reporting confirmed destruction of heritage. Another aim is to create a new dialogue between local Yemenis and international organizations and Institutions. Furthermore, visualizing destruction is also a way to detect noticeable patterns that may reveal intentions and deliberate acts. </p>',
            location: {
                center: [44.44949, 15.99707],
                zoom: 5.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'all-spread-out-sheet1',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'all-spread-out-sheet1',
                opacity: 0,
              },
            ],
        },
        {
            id: 'chap3',
            alignment: 'left',
            hidden: false,
            title: 'Political Background',
            image: 'images/Legendchapter3.png',
            description: '<p> There are several parties involved in the destruction of Yemeni heritage. The three major contributors are Saudi Arabia, Al-Qaeda and ISIS. The Houthis and the government&#39s army are also involved; however, there is only one documented site believed to be damaged by both sides clashing. With a lack of evidence, it is hard to determine which side is culpable. </p> <p> This project will take a closer look at each party&#39s destruction, analyzing the amount, types and extent of destruction of each site. </p>',
            location: {
                center: [44.44949, 15.99707],
                zoom: 5.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'all-spread-out-sheet1',
                opacity: 0.5,
              },
              {
                layer: 'saudi-highlighted',
                opacity: 0.8,
              },
              {
                layer: 'alhouthi-highlighted',
                opacity: 0.8,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'all-spread-out-sheet1',
                opacity: 0,
              },
              {
                layer: 'saudi-highlighted',
                opacity: 0,
              },
              {
                layer: 'alhouthi-highlighted',
                opacity: 0,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 0,
              },
            ],
        },
        {
            id: 'chap4',
            alignment: 'left',
            hidden: false,
            title: 'Saudi Arabia',
            image: 'images/Legendchapter4.png',
            description: '<p> Saudi Arabia has inarguably been behind most of the heritage destruction in Yemen, damaging 77 recorded sites as of December 2016. </p>',
            location: {
                center: [44.44949, 15.99707],
                zoom: 5.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'saudi-all-spread-out',
                opacity: 1,
              },
              {
                layer: 'saudi-highlighted',
                opacity: 1,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
            ],
            onChapterExit: [
              {
                layer: 'saudi-all-spread-out',
                opacity: 0,
              },
              {
                layer: 'saudi-highlighted',
                opacity: 0,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
            ],
        },
        {
            id: 'chap5',
            alignment: 'left',
            hidden: false,
            title: 'Saudi Arabia',
            image: 'images/legend2.png',
            description: '<p> Out of the 77 sites: 61 of them are categorized as Historic Monuments, 15 as Archeological Sites, 10 as Museums/Cultural Sites and 9 as Urban Districts. </p>',
            location: {
                center: [44.00000, 15.50700],
                zoom: 6.40,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'saudi-historic-spread-out',
                opacity: 1,
              },
              {
                layer: 'saudi-urban-spread-out',
                opacity: 1,
              },
              {
                layer: 'saudi-museum-spread-out',
                opacity: 1,
              },
              {
                layer: 'saudi-archeology-spread-out',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'saudi-historic-spread-out',
                opacity: 0,
              },
              {
                layer: 'saudi-urban-spread-out',
                opacity: 0,
              },
              {
                layer: 'saudi-museum-spread-out',
                opacity: 0,
              },
              {
                layer: 'saudi-archeology-spread-out',
                opacity: 0,
              },
            ],
        },
        {
            id: 'chap6',
            alignment: 'left',
            hidden: false,
            title: 'Al-Qaeda',
            image: 'images/Legendchapter6.png',
            description: '<p> Al-Qaeda is responsible of a total of 13 sites. Al-Qaeda&#39s presence in Yemen goes back around 3 decades and has been destroying Sufi shrines for years before the 2015 Coalition. However, due to the country&#39s instability from the civil unrest, Al-Qaeda&#39s heritage destruction increased exponentially.  </p>',
            location: {
                center: [44.44949, 15.99707],
                zoom: 5.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'a-qaeda-all-spread-out',
                opacity: 1,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'a-qaeda-all-spread-out',
                opacity: 0,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 0,
              },
            ],
        },
        {
            id: 'chap7',
            alignment: 'left',
            hidden: false,
            title: 'Al-Qaeda',
            image: 'images/Legendchapter7.png',
            description: '<p> Out of the 13 sites: 11 of them are categorized as Historic Monuments, 1 as a Museums/Cultural Site and 1 as a Urban District.  </p>',
            location: {
                center: [44.00000, 15.50700],
                zoom: 6.40,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'al-qaeda-historic-spread-out',
                opacity: 1,
              },
              {
                layer: 'al-qaeda-urban-spread-out',
                opacity: 1,
              },
              {
                layer: 'al-qaeda-museum-spread-out',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'al-qaeda-historic-spread-out',
                opacity: 0,
              },
              {
                layer: 'al-qaeda-urban-spread-out',
                opacity: 0,
              },
              {
                layer: 'al-qaeda-museum-spread-out',
                opacity: 0,
              },
            ],
        },
        {
            id: 'chap8',
            alignment: 'left',
            hidden: false,
            title: 'ISIS',
            image: 'images/Legendchapter8.png',
            description: '<p> ISIS has a smaller presence in Yemen in comparison to Al-Qaeda. The party has destroyed a total of 5 sites. </p>',
            location: {
                center: [44.44949, 15.99707],
                zoom: 5.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'isis-all-spread-out',
                opacity: 1,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'isis-all-spread-out',
                opacity: 0,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 0,
              },
            ],
        },
        {
            id: 'chap9',
            alignment: 'left',
            hidden: false,
            title: 'ISIS',
            image: '',
            description: '<p> All 5 were cultural sites as all 5 were Sufi shrines. </p>',
            location: {
                center: [44.00000, 15.50700],
                zoom: 6.40,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'isis-all-spread-out',
                opacity: 1,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'isis-all-spread-out',
                opacity: 0,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 0,
              },
              {
                layer: 'all-spread-out-stroke',
                opacity: 0.4,
              },
              {
                layer: 'alqaeda-highlighted',
                opacity: 0,
              },
            ],
        },
        {
            id: 'chap10',
            alignment: 'full',
            hidden: false,
            title: 'Interactive Map',
            image: 'images/Interactivemap.png',
            description: '<a href="https://arcg.is/5W4Tu">Click here for the interactive map.</a>',
            location: {
                center: [44.44949, 15.99707],
                zoom: 5.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'al-qaeda-historic-spread-out',
                opacity: 1,
              },
              {
                layer: 'al-qaeda-urban-spread-out',
                opacity: 1,
              },
              {
                layer: 'al-qaeda-museum-spread-out',
                opacity: 1,
              },
            ],
            onChapterExit: [
              {
                layer: 'al-qaeda-historic-spread-out',
                opacity: 0,
              },
              {
                layer: 'al-qaeda-urban-spread-out',
                opacity: 0,
              },
              {
                layer: 'al-qaeda-museum-spread-out',
                opacity: 0,
              },
            ],
        },
    ]
};

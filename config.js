var config = {
    style: 'mapbox://styles/kelsharrell/cks9fdza22n2d17mnuiwnpqvq',
    accessToken: 'pk.eyJ1Ijoia2Vsc2hhcnJlbGwiLCJhIjoiY2tzN3p6ZXoxMGtncDJubzI1cTVwZTdrbSJ9.-alNg8ClUqGS9wbDZN3yeA',
    showMarkers: true,
    markerColor: '#000',
    theme: 'dark',
    use3dTerrain: false,
    title: 'COVID-19 guidelines at universities in the Big Ten Conference',
    byline: 'The Daily Iowan',
    footer: 'Information from Big Ten university websites',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'COVID-19 guidelines across the Big Ten Conference',
            description: 'The start of the fall 2021 semester brings continued concern over the spread of COVID-19 as delta varient cases continue to increase across the country. Each university in the Big Ten Conference has differing COVID-19 guidelines that students, faculty, and staff are expected to follow once they arrive on campus for the start of classes. Scroll to read through guidelines for each institution.',
            location: {
              center: [-91.54174, 41.64216],
              zoom: 4.45,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'UI',
            alignment: 'right',
            hidden: false,
            title: 'University of Iowa',
            image: './images/uiowa.png',
            description: 'The University of Iowa will be returning to mostly in-person, face-to-face instruction in the fall 2021 semester. Face coverings and vaccinations will not be mandatory for students, faculty, and staff to return to campus. However, the UI urges everyone eligable to receive a vaccine to do so. Centers for Disease Control and Prevention cleaning guidelines will continued to be followed by the university. The UI will continue to test symptomatic individuals and asymptomatic individuals with known COVID-19 exposure. Read more on the University of Iowa website: <a href="https://coronavirus.uiowa.edu/fall-2021">https://coronavirus.uiowa.edu/fall-2021</a>.',
            location: {
              center: [-91.56783, 41.66372],
              zoom: 12.94,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Neb',
            alignment: 'right',
            hidden: false,
            title: 'University of Nebraska-Lincoln',
            image: './images/neb.jpg',
            description: 'The University of Nebraska-Lincoln will require all students, faculty, and staff to be tested upon returning to campus, and will continue to administer weekly COVID-19 saliva testing. Fully vaccinated individuals are not required to wear face coverings, but are encouraged to per CDC guidelines. Nebraska will adapt guidelines as delta varient cases increase. Unvaccinated individuals are expected to wear face coverings. Read more on the University of Nebraska-Lincoln website: <a href="https://covid19.unl.edu/fall-2021-campus">https://covid19.unl.edu/fall-2021-campus</a>.',
            location: {
              center: [-96.70123, 40.82088],
              zoom: 13.00,
              pitch: 53.00,
              bearing: -39.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Minn',
            alignment: 'right',
            hidden: false,
            title: 'University of Minnesota',
            image: './images/minn.png',
            description: 'The University of Minnesota is requiring students, faculty, and staff to wear face coverings in university buildings. The university requires students to get the COVID-19 vaccine now that the Food and Drug Aministration has approved the Pfizer vaccine, adding it to the list of required vaccinations for attending Minnesota. Faculty and staff are not required to get the vaccintion, but will be asked to confirm if they are vaccinated or if unvaccinated confirm how frequently they are tested, tested if they experience symptoms, and tested if exposed to COVID-19. Read more on the University of Minnesota website: <a href="https://safe-campus.umn.edu/return-campus/covid-19-updates">https://safe-campus.umn.edu/return-campus/covid-19-updates</a>.',
            location: {
              center: [-93.18216, 44.98875],
              zoom: 14.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Illi',
            alignment: 'right',
            hidden: false,
            title: 'University of Illinois at Urbana-Champaign',
            image: './images/illini.png',
            description: 'The University of Illinois at Urbana-Champaign requires all students who are able to be fully vaccinated before returning to campus for the fall 2021 semester. Individuals who can&#39;t get vaccinated for medical or other reasons will be required to continue participating in the COVID-19 testing program. Students, faculty, and staff must complete an on-campus COVID-19 test and receive a negative result or have a university-verified vaccination record card to access university buildings. Read more on the University of Illinois website: <a href="https://covid19.illinois.edu/">https://covid19.illinois.edu/</a>.',
            location: {
              center: [-88.22519, 40.10887],
              zoom: 15.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'North',
            alignment: 'right',
            hidden: false,
            title: 'Northwestern University',
            image: './images/north.png',
            description: 'Northwestern University is requiring all students to complete a COVID-19 vaccination form in order to register for on-campus classes this fall. Students, faculty, and staff will be required to wear a face covering in indoor spaces regardless of their vaccination status. Private offices, personal residence or dorm room, or when eating or drinking are excempt from this rule. Unvaccinated students are expected to comply with heightened COVID-19 testing, symptom monitoring, and quarentining/isolating. Read more on the Northwestern University website: <a href="https://www.northwestern.edu/coronavirus-covid-19-updates/">https://www.northwestern.edu/coronavirus-covid-19-updates/</a>.',
            location: {
              center: [-87.67587, 42.05605],
              zoom: 15.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Wisc',
            alignment: 'right',
            hidden: false,
            title: 'University of Wisconsin-Madison',
            image: './images/wisc.png',
            description: 'The University of Wisconsin-Madison is requiring all students, employees, and visitors to wear face coverings in university buildings. UW-Madison is providing on-campus COVID-19 testing and vaccinations and is encouraging those eligable to get vaccinated. The university is asking individuals to register COVID-19 vaccination card with a university web portal. Read more on the University of Wisconsin website: <a href="https://covidresponse.wisc.edu/">https://covidresponse.wisc.edu/</a>.',
            location: {
              center: [-89.42902, 43.07819],
              zoom: 14.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'IU',
            alignment: 'right',
            hidden: false,
            title: 'Indiana University Bloomington',
            image: './images/indy1.jpg',
            description: 'Indiana University Bloomington is requiring all students be vaccinated before returning to campus and starting classes. The university will provide vaccinations on campus for those not fully vaccinated yet and those returning from an international location. Individuals who seek approval for a vaccination excemption will still need to particpate in mitigation testing and wear a face covering. Read more on the Indiana University website: <a href="https://www.iu.edu/covid/index.html">https://www.iu.edu/covid/index.html</a>.',
            location: {
              center: [-86.51821, 39.17771],
              zoom: 14.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Pur',
            alignment: 'right',
            hidden: false,
            title: 'Purdue University',
            image: './images/purdue.png',
            description: 'Purdue University is allowings students to choose to either to provide proof of vaccination by Aug. 13 or particpate in routine COVID-19 surveillance testing. Ten students who are fully vaccinated will win $9,992 for choosing to get vaccinated. Students, faculty, staff, and visitors are required to wear masks indoors regardless of vaccination status. Read more on the Purdue University website: "https://protect.purdue.edu/">https://protect.purdue.edu/</a>.',
            location: {
              center: [-86.92495, 40.42759],
              zoom: 14.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Mich St',
            alignment: 'right',
            hidden: false,
            title: 'Michigan State University',
            image: './images/michst.jpg',
            description: 'Michigan State University is planning for 85 percent of undergraduate classes to have an in-person component. The university is requiring all students, faculty, and staff be fully vaccinated against COVID-19 by Aug. 31. Individuals are required to wear face coverings indoors on campus. Michigan State isn&#39;t requiring individuals to upload their vaccination cards, but the university will request verification if the information provided isn&#39;t sufficent. Read more on the Michigan State University website: <a href="https://msu.edu/together-we-will/">https://msu.edu/together-we-will/</a>.',
            location: {
              center: [-84.48093, 42.72388],
              zoom: 14.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Mich',
            alignment: 'right',
            hidden: false,
            title: 'University of Michigan',
            image: './images/mich.png',
            description: 'The University of Michigan is requiring all students, faculty, and staff to be vaccinated for the fall 2021 semester. Individuals are required to submit their vaccine information by Aug. 30. Face coverings are required in university buildings at all three Michigan campuses. Michigan is reporting that 86 percent of students and 70 percent of employees are self-reporting as fully vaccinated as of Aug. 12. Read more at the University of Michigan website: <a href="https://campusblueprint.umich.edu/dashboard/">https://campusblueprint.umich.edu/dashboard/</a>.',
            location: {
              center: [-83.71063, 42.29609],
              zoom: 14.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Ohio',
            alignment: 'right',
            hidden: false,
            title: 'Ohio State University',
            image: './images/ohiost.png',
            description: 'Ohio State University is requiring everyone to wear masks inside university buildings regardless of vaccination status. Unvaccinated individuals are required to wear masks outside when social distancing isn&#39;t possible, vaccinated individuals don&#39;t need to wear a face covering outside. Students, faculty, and staff are required to report whether they&#39;re vaccinated by Aug. 5. To encourage vaccination, Ohio State is distributing $50,000 worth of prizes to students, faculty, and staff who get vaccinated and report it to the institution. Read more on the Ohio State University website: <a href="https://safeandhealthy.osu.edu/">https://safeandhealthy.osu.edu/</a>.',
            location: {
              center: [-83.02812, 40.00409],
              zoom: 14.81,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Penn',
            alignment: 'right',
            hidden: false,
            title: 'Penn State University',
            image: './images/penn.png',
            description: 'Penn State University is requiring everyone to wear face coverings inside university buildings. The university is encouraging everyone who can get vaccinated to do so and report their vaccination status. Indivduals who haven&#39;t reported their vaccination status by Aug. 9 will be required to get tested for COVID-19 weekly during the fall semester. Students living in residence halls will be required to complete a COVID-19 test upon arriving on campus. Read more on the Penn State University website: <a href="https://virusinfo.psu.edu/covid-19-dashboard/">https://virusinfo.psu.edu/covid-19-dashboard/<a>.',
            location: {
              center: [-77.86177, 40.80679],
              zoom: 14.00,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Rut',
            alignment: 'right',
            hidden: false,
            title: 'Rutgers University',
            image: './images/rutgers.png',
            description: 'Rutgers University is requiring students upload their vaccination by Aug. 1 in order to continue their academic work at the university. Students who do not upload their vaccine information will have their account access revoked and those living on campus will not receive their dorm or apartment keys. Rutgers is requiring masks in all indoor facilies and unvaccinated individuals with continue to be tested for COVID-19 weekly. Read more on the Rutgers University website: <a href="https://coronavirus.rutgers.edu/">https://coronavirus.rutgers.edu/</a>.',
            location: {
              center: [-74.44888, 40.51919],
              zoom: 14.55,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Mary',
            alignment: 'right',
            hidden: false,
            title: 'University of Maryland',
            image: './images/mary.png',
            description: 'The University of Maryland is requiring face coverings be worn indoors regardless of an individuals vaccine status. Students, faculty, and staff are required to get vaccinated. Vaccinated individuals don&#39;t need to get tested for COVID-19 regularly. Unvaccinated individuals need to get tested twice weekly. Maryland will resume operating at full capacity during the semester. Read more on the University of Maryland website: <a href="https://www.umd.edu/4Maryland">https://www.umd.edu/4Maryland</a>.',
            location: {
              center: [-76.94619, 38.99105],
              zoom: 15.72,
              pitch: 45.00,
              bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

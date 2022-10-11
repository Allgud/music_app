export const TRACKS = [
    {id: "0", title: 'Guilt', author: 'Nero', album: 'Welcome Reality', year: '2020', time: '4:44', advInfo: ''},
    {id: "1", title: 'Elektro', author: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', year: '2020', time: '2:22', advInfo: ''},
    {id: "2", title: 'I’m Fire', author: 'Ali Bakgor', album: 'I’m Fire', year: '2020', time: '2:22', advInfo: ''},
    {id: "3", title: 'Non Stop', author: 'Стоункат, Psychopath', album: 'Non Stop', year: '2020', time: '4:12', advInfo: ' (Remix)'},
    {id: "4", title: 'Run Run', author: 'Jaded, Will Clarke, AR/CO', album: 'Run Run', year: '2020', time: '2:54', advInfo: ' (feat. AR/CO)'},
    {id: "5", title: 'Eyes on Fire', author: 'Blue Foundation, Zeds Dead', album: 'Eyes on Fire', year: '2020', time: '5:20', advInfo: ' (Zeds Dead Remix)'},
    {id: "6", title: 'Mucho Bien', author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', album: 'Mucho Bien', year: '2020', time: '3:41', advInfo: ' (Hi Profile Remix)'},
    {id: "7", title: 'Knives n Cherries', author: 'minthaze', album: 'Captivating', year: '2020', time: '1:48', advInfo: ''},
    {id: "8", title: 'How Deep Is Your Love', author: 'Calvin Harris, Disciples', album: 'How Deep Is Your Love', year: '2020', time: '3:32', advInfo: ''},
    {id: "9", title: 'Morena', author: 'Tom Boxer', album: 'Soundz Made in Romania', year: '2020', time: '3:36', advInfo: ''},
]

export const FILTERS = {
    author: [
        {id: 1, title: 'Michael Jackson'}, 
        {id: 2, title: 'Frank Sinatra'}, 
        {id: 3, title: 'Calvin Harris'}, 
        {id: 4, title: 'Evanescense'}, 
        {id: 5, title: 'Jay-Z'}, 
        {id: 6, title: 'Clouns'}
    ],
    genre: [
        {id: 1, title: 'Rock'},
        {id: 2, title: 'Hip-Hop'},
        {id: 3, title: 'Pop'},
        {id: 4, title: 'Techno'}, 
        {id: 5, title: 'Indi'},
        {id: 6, title: 'R & B'}
    ],
    year: [
        {id: 1, title: 'Более новые'}, 
        {id: 2, title: 'Более старые'}
    ]
}

export const COLLECTIONS_ITEMS = [
    {id: 1, title: 'Новинки недели'},
    {id: 2, title: 'Топ-20 за месяц'}, 
    {id: 3, title: 'Подкасты'}, 
    {id: 4, title: 'Хиты всех времен'}, 
    {id: 5, title: 'Медлячки'}, 
    {id: 6, title: 'Музыка в дорогу'}
]

const colors = ['#271A58', '#580EA2', '#9A48F1']

export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

export const PAGES_TITLES = {
    '/': 'Треки',
    '/collections': "Мои подборки" 
}

const COLORS = {
    'smoke-white': '#F5F5F5',
    'smoke-white-sec': '#F6F5F3',
    'white': "#FFFFFF",
    'dark-purple-violet': '#580EA2',
    'light-telegrey': '#D0CECE',
    'grey-umbra': '#2E2E2E',
    'heliotrop': '#B672FF',
    'moderate-red': '#A53939',
    'light-grey': '#D9D9D9',
    'shade-grey': '#696969',
    'white-alum': '#ACACAC',
    'dark-grey': '#313131',
    'wet-asphalt': '#4E4E4E',
    'blue-lilo': '#9A48F1',
    'light-purple': '#D9B6FF',
    'moderate-orchid': '#AD61FF',
    'black': '#000000',
    'kerim`s-beard': '#D3D3D3',
    'blue-black': '#181818',
    'grafit-black': '#1C1C1C',
    'black-oliva': '#383838',
    'agat-grey': '#B1B1B1'  
}

export const themes = {
    light: {
        title: 'light',
        wrapperBack: COLORS['white'],
        containerBack: COLORS['white'],
        navBack: COLORS['smoke-white-sec'],
        color: COLORS['black'],
        progressBack: COLORS['light-grey'],
        burgerBack: COLORS['black'],
        themeBtnBack: COLORS['smoke-white-sec'],
        borderColor: COLORS['light-grey'],
        filterListBack: COLORS['smoke-white-sec'],
        trackIconBack: COLORS['agat-grey'],
        buttonFill: COLORS['agat-grey'],
        volumeFill: COLORS['moderate-orchid']
    },
    dark: {
        title: 'dark',
        wrapperBack: COLORS['black-oliva'],
        containerBack: COLORS['blue-black'],
        color: COLORS['white'],
        navBack: COLORS['blue-black'],
        progressBack: COLORS['grey-umbra'],
        burgerBack: COLORS['kerim`s-beard'],
        themeBtnBack: COLORS['grafit-black'],
        borderColor: COLORS['wet-asphalt'],
        filterListBack: COLORS['dark-grey'],
        trackIconBack: COLORS['dark-grey'],
        buttonFill: COLORS['light-grey'],
        volumeFill: COLORS['white']
    }
}


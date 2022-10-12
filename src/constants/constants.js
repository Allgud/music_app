export const SKELETONS_COUNT = 10

export const convertDuration = (duration) => {
    const minutes = Math.floor(duration / 60).toString()
    const seconds = Math.floor(duration % 60).toString()
    const checkedSeconds = () => ((seconds.length) === 1 ? `${seconds}0` : seconds)
    return `${minutes}:${checkedSeconds()}`
}

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


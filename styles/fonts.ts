import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const serif = Source_Serif_4({ weight: "700",   
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-serif'
 });
const sans = Source_Sans_3({ weight: "400",   
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans-serif'
 })

export { serif, sans }
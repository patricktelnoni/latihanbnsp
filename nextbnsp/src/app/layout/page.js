import '../styles/index.css'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata = {
    title: {
        default: 'The Food Ninja Blog',
        template: 'The Food Ninja Blog | %s',
    },
    description: 'Discover amazing culinary adventures, travel food stories, and food theory exploration at The Food Ninja Blog. Your ultimate destination for food inspiration and cooking insights.',
    keywords: 'food blog, culinary adventures, travel food, cooking recipes, food theory, ninja cooking, food inspiration',

    openGraph: {
        type: 'website',
        title: {
            default: 'The Food Ninja Blog',
            template: 'The Food Ninja Blog | %s',
        },
        description: 'Explore incredible food adventures and culinary insights. Join The Food Ninja Blog for amazing recipes, travel food stories, and cooking inspiration.',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ffoodninja1093back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.10" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
        </html>
    )
}
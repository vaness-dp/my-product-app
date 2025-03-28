import { Metadata } from 'next/dist/types'
import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
	preload: true
})

export const metadata: Metadata = {
	title: 'Product-App',
	description: 'My Product App'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={montserrat.variable}>{children}</body>
		</html>
	)
}

import { ReactServerComponent } from '@lazarv/react-server/navigation'
import './globals.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'T-Shirts & Mugs Shop',
  description: 'Shop for awesome t-shirts and mugs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
      
       <Header/>
        
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}


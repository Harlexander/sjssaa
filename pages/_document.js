import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <title>St. Joseph Senior Secondary School of surulere ( SJSSAA )</title> */}
        <meta name='description' content='St. Joseph Secondary School Alumni Association (SJSSAA) of Surulere</b> is a non-profit alumni association aiming to promote and facilitate social interaction and well-being of its members, facilitate and maintain interest in the well-being of St. Joseph Secondary School of Surulere, Lagos (referred to here as School), and advance goodwill in the community. SJSSAA values respect, integrity, and commitment to professionalism among its members, as well as dedication to continuous success and transparency in the affairs of the Association.'/>
        <link rel="icon" type="image/jpg" href="/logo-1.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;700;800&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
    </Head>
      <body style={{fontFamily: "Nunito', sans-serif"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
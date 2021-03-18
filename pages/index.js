import Head from 'next/head';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <Head>
                <title>Home - Sharp Soluções Digitais</title>
                <meta name="robots" content="index/follow" />
                <meta name="description" content="Site feito usando Next.js" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://sharpsolucoes.com/public/favicon32x32.png" />
            </Head>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Sobre Nós</a>
            </Link>            
        </div>
    );
}

export default Home;
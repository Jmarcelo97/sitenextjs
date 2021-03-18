import Head from 'next/head';
import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <Head>
                <title>Sobre - Sharp Soluções Digitais</title>
                <meta name="robots" content="index/follow" />
                <meta name="description" content="Somos uma empresa nova. Nossas primeiras atividades iniciaram-se em maio de 2019. Somos desenvolvedores apaixonados pelo o que fazemos e dispostos a fazer diferente." />
                <link rel="icon" type="image/png" sizes="32x32" href="https://sharpsolucoes.com/public/favicon32x32.png" />
            </Head>
            <h1>Sobre</h1>
            <p>Olá! Vejo que você veio nos visitar e nada melhor que uma boa conversa para nos conhecermos melhor. Então, vamos lá! Somos uma empresa nova. Nossas primeiras atividades iniciaram-se em maio de 2019. Somos desenvolvedores apaixonados pelo o que fazemos e dispostos a fazer diferente.</p>
            <p>Mas, como vamos fazer diferente? Nossa empresa utiliza tecnologias modernas e atuais para o desenvolvimento de aplicativos, websites e sistemas de gestão. Contamos também com processos de tratamentos de dados que são passados para nossos clientes, assim, eles ficam por dentro de tudo que está acontecendo com seu produto. Bom, acho que já falamos muito sobre nós... e gostaríamos de saber um pouco sobre você. Então, entre em contato e nos conte o motivo de sua visita.</p>
            <Link href="/">
                <a>Voltar para Home</a>
            </Link> 
        </div>
    );
}

export default Sobre;
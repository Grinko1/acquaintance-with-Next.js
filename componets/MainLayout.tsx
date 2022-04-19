import Head from "next/head";
import Link from "next/link";

const MainLayout = ({children, title = 'Next App'}) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content="next, js, learn"/>
        <meta name='description' content="educational project"/>
        </Head>
        <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/posts"><a>Post</a></Link>
        </nav>
        <main>
            {children}
        </main>
            <style jsx >{`
            nav{
                position:fixed;
                height: 60px;
                top:0;
                left:0;
                rigth: 0;
                width:100%;
                background: black ;
                display:flex;
                justify-content:space-around;
                align-items: center;
            }
            nav a {
                color: #fff;
                text-decoration:none;
            }
            main{
                margin-top:60px;
                padding:1em;
            }
           
            `}</style>
        </>
    );
};

export default MainLayout;
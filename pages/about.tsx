import  Router  from "next/router";
import MainLayout from "../componets/MainLayout";


const About = ({title}) => { 
    const linkPush = () => {
        Router.push('/')
    }
    return (
        <MainLayout title={'About page'}>
           <h1>{title.title}</h1> 
           <button onClick={linkPush}>Back to home</button>
           <button onClick={()=> Router.push('/posts')}>Go to posts</button>
        </MainLayout>
    );
};

export default About;

About.getInitialProps = async() => {
    const res = await fetch(`http://localhost:4200/about`);
    const data = await res.json()
    return{
        title:data
    }
}
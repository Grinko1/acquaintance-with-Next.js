import Link from "next/link"
import MainLayout from "../componets/MainLayout";
import style from '../styles/error.module.scss'

const ErrorPage = () => {
    return (
        <MainLayout>
            <h1 className={style.error}>Error page not found </h1>
            <p className={style.p}>Please <Link href='/'><a>Go to home page</a></Link></p>
        </MainLayout>
    );
};

export default ErrorPage;
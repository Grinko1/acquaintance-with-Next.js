import { NextPageContext } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../componets/MainLayout";
import { MyPost } from "../interfaces/post";

interface PostsPageProps {
    posts: MyPost[]
}

const Posts = ({posts: serverPosts}: PostsPageProps) => {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load () {
            const res =  await fetch ('http://localhost:4200/posts')
            const data = await res.json()
            setPosts(data)
        }
        if(!serverPosts) {
            load()
        }
    },[])

    if(!posts) {
         return <MainLayout>
             <p>Loading..</p>
         </MainLayout>
    }
    return (
        <MainLayout title={'Posts page'}>
            <h1>Posts</h1>
            <ul>
                {
                    posts && posts.map(post => (
                        <li key={post.id}>
                            <Link href={`/post/[id]`} as={`/post/${post.id}`} >
                                <a>{post.title}</a>
                            </Link>
                            </li>
                    ) )

                }
            </ul>
        </MainLayout>
    );
};

export default Posts;

// Posts.getInitialProps = async ({req}) => {
//     if(!req) {
//         return {posts:null}
//     }
//     const res = await fetch('http://localhost:4200/posts')
//     const posts = await res.json()
//     return { posts }
//   }

export async function getSeverSideProps({req}:NextPageContext){
    if(!req) {
        return {posts:null}
    }
    const res = await fetch('http://localhost:4200/posts')
    const posts: MyPost[] = await res.json()
    return { props:{posts} }
}
import { NextPageContext } from 'next';
import Router, { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import MainLayout from '../../componets/MainLayout';
import { MyPost} from '../../interfaces/post';


interface IPostProps {
  post : MyPost
}
const Post = ({ post: serverPost }: IPostProps) => {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(()=>{
        const load = async () => {
            const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await res.json();
            setPost(data)
        }
        if(!serverPost) {
            load()
        }
    }, [])
    if(!post) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }


  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <button onClick={() => Router.push('/posts')}>Go back</button>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
        `}
      </style>
    </MainLayout>
  );
};

export default Post;

interface PostNextPageContext extends NextPageContext {
  query :{
    id: string
  }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    if(!req) {
        return {post: null}
    }
  const res = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post :MyPost = await res.json();
  return { post };
};

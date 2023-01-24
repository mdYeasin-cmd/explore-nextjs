import Banner from "@/Components/Banner/Banner";
import Footer from "@/Components/Footer/Footer";
import Post from "@/Components/Post/Post";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <Banner></Banner>

      <div>
        {
          posts?.map(post => <div key={post.id} className="card my-10 mx-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <div className="card-actions justify-end">
                {post.body}
              </div>
            </div>
          </div>)
        }

        <div className="text-center">
          <Link href="/posts">
            <button className="btn btn-primary">
              See More
            </button>
          </Link>
        </div>

      </div>

      <Footer></Footer>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = await res.json();

  console.log(data);

  return {
    props: {
      posts: data
    }
  }
}

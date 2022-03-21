
export default function Home({posts}) {
  console.log(posts);

  return (
    <>
      <h1>Welcome to my blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

// 해당 페이지를 들어올때마다 데이터를 그때 그때 요청하여 렌더링해줌.
export const getServerSideProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}
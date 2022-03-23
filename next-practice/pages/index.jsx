
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
// server에서 데이터가 바꼈을 때, 즉각적으로 반영됨
// 빈번한 데이터의 변화가 필요할 때 ssr로 구현하면 좋음.

// export const getServerSideProps = async() => {
//   const res = await fetch('http://localhost:8080/api/posts')
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:8080/api/posts')
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 20
  }
}


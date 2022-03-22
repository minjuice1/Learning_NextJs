import Image from 'next/image'
import Link from 'next/link'

const index = ({ photo }) => {
  const {title, url} = photo
  return (
    <>
      <h2>image {title}</h2>
      <Image
        src={url}
        width={500}
        height={500}
      />
      <Link href="/photos">
        <a>되돌아가기</a>
      </Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  // api 주소를 동적으로 생성하기 위해서 path의 params를 받아야함.
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
  const photos = await res.json();
  const ids = photos.map(photo => photo.id);
  const paths = ids.map(id => {
    return {
      params: {id: id.toString()}
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export default index;
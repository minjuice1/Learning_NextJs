import HeadInfo from '../components/HeadInfo'
import Image from 'next/image'

const photos = ({photos}) => {
  console.log(photos);

  return (
    <>
      <HeadInfo title="My Blog Photos"/>
      <h1>My photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default photos;

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10');
  const photos = await res.json();

  return {
    props: {
      photos
    }
  }
}
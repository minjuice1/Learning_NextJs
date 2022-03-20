import Head from 'next/head';

const HeadInfo = ({title, keyword, contents}) => {
  return (
    <>
      <Head>
          <title>{title}</title>
          <meta keyword={keyword}/>
          <meta content={contents}/>
      </Head>
    </>
  )
}

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog powered by Next js',
  contents: 'Practice Next js'
}

export default HeadInfo
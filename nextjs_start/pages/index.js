import React from 'react'
import Link from 'next/link'

function Index() {
  return (
    <>
    <li>
      <Link href={"/home"}>
        home으로 이동
      </Link>
    </li>
    <li>
      <Link href={"/me"}>
        me로 이동
      </Link>
    </li>
    </>
    )
}

export default Index
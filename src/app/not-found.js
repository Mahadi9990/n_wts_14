import Link from 'next/link'
import React from 'react'

export default function Not_found() {
  return (
    <div className='flex justify-center items-center'>
        <h1 className='text-center text-red-600'>this page is not found</h1>
        <Link href={'/'}>Go to Home page</Link>
    </div>
  )
}

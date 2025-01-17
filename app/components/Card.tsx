import React from 'react'
import Link from 'next/link'

const Card = () => {
  return (
      <>
          <div className="bg-green-500 h-72 w-52 rounded-md">
              <div className="h-[90%] bg-red-50 rounded-t-md">
                  here is the image
              </div>
              <div className="flex justify-between items-center">
                  <div className="pl-2">Price</div>
                  <Link href='/cart'>
                      <button className="border-2 rounded-md text-center pr-2">Add to cart</button>
                  </Link>
              </div>
          </div>
      </>
  )
}

export default Card

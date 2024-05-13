import NextImage from 'next/image'
import NextLink from 'next/link'
import WinstonImage from '@/public/IMG_0263.png'

export default function Page() {
  return (
    <div className='flex flex-col items-center p-5'>
      <p className='text-yellow-500'>
        Winston Labz is a company run by a code writing cat!
      </p>
      <NextImage
        src={WinstonImage}
        alt='Winston the coding cat'
        className='h-[400px] w-auto'
        priority={true}
        />
      <p className='text-yellow-500'>
        As far as we now, Winston is the only cat that can code.
      </p>
      <NextLink href='/' className='m-5 sm:m-10 text-blue-700'>
        {'< Back to the app'}
      </NextLink>
    </div>
  )
}
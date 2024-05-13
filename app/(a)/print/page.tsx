'use client'

import { useContext } from 'react'
import { QRFormDataContext } from '@/app/providers'
import { useQRCode } from 'next-qrcode'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Page() {
  const { qrFormData } = useContext(QRFormDataContext)
  const { SVG: QRCode } = useQRCode()

  if(!qrFormData.toEncode) {
    redirect('/')
  }

  return (
    <>
      {/* wrap everything in a link, so a click can send you back to app */}
      {/* draw everything on a white background overlay */}
      <Link href='/' className='min-h-screen bg-white flex flex-col items-center justify-center'>
        <p className='text-7xl mb-2'>
          {qrFormData.title}
        </p>
        <QRCode
          text={qrFormData.toEncode}
          options={{
            margin: 2,
            width: 200,
          }}
        />
        {/* temporarily display banner that tells user how to close overlay */}
        <div className='print:hidden absolute flex items-center justify-center'>
          <div className='animate-fadeout px-4 py-2 bg-white border-black border-2 text-black rounded-lg'>
              Click anywhere to go back
          </div>
        </div>
      </Link>
    </>
  )
}


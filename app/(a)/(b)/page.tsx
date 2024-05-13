'use client'

import { useContext, ChangeEvent, SyntheticEvent } from 'react'
import { QRFormDataContext } from '@/app/providers'
import { useQRCode } from 'next-qrcode'
import { useRouter } from 'next/navigation'


export default function QRCode() {
  const { qrFormData, setQRFormData } = useContext(QRFormDataContext)
  const { SVG: QRCode } = useQRCode()
  const router = useRouter()

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setQRFormData({ ...qrFormData, [e.target.name]: e.target.value})
  }

  function onSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault()
    router.push('/print')
  }

  return (
    <>
      <div className='grow flex flex-col items-center justify-center bg-green-500 mt-10'>
        <div className='text-4xl sm:text-5xl md:text-7xl mb-2'>
          {!qrFormData.title ?
              <h1 className='text-gray-500'>
                No Title
              </h1> :

              <h1 className='text-black'>
                {qrFormData.title}
              </h1>
          }
        </div>

        <div className='h-[200px] mb-4'>
          {!qrFormData.toEncode ?
            <div className='animate-bounce text-7xl text-gray-500 pt-20'>
              ?
            </div> :
            <QRCode 
              text={qrFormData.toEncode} 
              options={{
                margin: 2,
                width: 200,
                color: {
                  dark: '#010599FF',
                  light: '#FFBF60FF',
                }
              }}
            />
          }
        </div>
      </div>

      <form className='flex flex-col items-center' onSubmit={onSubmit}>
        <label className='text-3xl text-blue-500 mt-3 sm:mt-6'>
          Title
        </label>
        <input
          autoFocus
          className='text-black w-80 sm:w-96 text-center mt-1 sm:mt-2'
          name='title'
          placeholder='qr code title'
          value={qrFormData.title}
          onChange={(e) => onChange(e)}
        />
        <label className='text-3xl text-blue-500 mt-3 sm:mt-6'>
          Encoded Text
        </label>
        <input
          className='text-black w-80 sm:w-96 text-center mt-1 sm:mt-2'
          name='toEncode'
          placeholder='text to make into qr code'
          value={qrFormData.toEncode}
          onChange={(e) => onChange(e)}
        />
        <button
          type='submit'
          disabled={!qrFormData.toEncode}
          className='bg-white px-2 text-black rounded-lg disabled:text-gray-400 mt-8 sm:mt-10'
        >
          Printable Version
        </button>
      </form>
    </>
  )
}

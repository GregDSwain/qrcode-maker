'use client'

import { createContext, useState } from 'react'
import { QRFormDataType, QRFormDataStateType } from '@/lib/types'

const blankQRFormData = {title: '', toEncode: ''}

// use default to allow destructuring and less optional chaining later
export const QRFormDataContext = createContext<QRFormDataStateType>(
  {
    qrFormData: blankQRFormData,
    setQRFormData: () => {}
  }
)

export function QRFormDataProvider({ children }: {children: React.ReactNode} ) {

  const [ qrFormData, setQRFormData ] = useState<QRFormDataType>(blankQRFormData)

  return (
    <QRFormDataContext.Provider value={{qrFormData, setQRFormData}}>
      {children}
    </QRFormDataContext.Provider>
  )
}

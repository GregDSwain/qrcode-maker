
import { Dispatch, SetStateAction } from 'react'

export interface QRFormDataType {
  title: string;
  toEncode: string;
}

export type QRFormDataStateType = {
  qrFormData: QRFormDataType
  setQRFormData: Dispatch<SetStateAction<QRFormDataType>>
}
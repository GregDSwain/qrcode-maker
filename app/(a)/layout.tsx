import { QRFormDataProvider } from '../providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <QRFormDataProvider>
      {children}
    </QRFormDataProvider>
  )
}

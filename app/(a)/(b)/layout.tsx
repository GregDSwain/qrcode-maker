import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className='flex flex-col h-screen'>
      <Header>
        QR Code Maker
      </Header>
      <main className='flex-1 overflow-y-auto'>
        {children}
      </main>
      <Footer />
    </div>
  );
}

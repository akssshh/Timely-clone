import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: 'Timely clone',
    description: 'AI-powered automatic time tracker.',
  }

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'>
                    {children}
                </div>
            </div>
        </body>
    </html>
  )
}

export default RootLayout
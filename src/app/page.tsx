'use client'

import { QRCodeSVG } from 'qrcode.react';
import styles from './page.module.scss';
import { useDogs } from '../common/hooks/useGetDogs'

export default function Home() {
  const { data: dog, isLoading } = useDogs();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>ELRC 출석 체크</h1>
        <p>Create your own QR code in seconds</p>
      </header>

      <main className={styles.main}>
        <div className={styles.qrSection}>
          <div className={styles.qrContainer}>
            {/* <div>
              <img src={dog?.message} alt="dog" />
            </div> */}
            <QRCodeSVG
              value="https://www.naver.com"
              size={200}
              level="H"
              includeMargin={true}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 QR Code Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}

'use client'

import { QRCodeSVG } from 'qrcode.react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.scss';
import { useGetForm } from '../../common/hooks/useGetForm'

export default function MainPage() {
  const searchParams = useSearchParams();
  const formId = searchParams.get('id') || '';
  const { data: formData, isLoading } = useGetForm(formId);

  if (isLoading) return <div>Loading...</div>;

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
              value={formData?.formUrl || ''}
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

import { QRCodeSVG } from 'qrcode.react';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>QR Code Example</h1>
      <div className={styles.qrCode}>
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
  );
}

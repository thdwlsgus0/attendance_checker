import "./globals.scss";
import { QueryProviders } from "@/common/providers/QueryProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProviders>
          {children}
        </QueryProviders>
      </body>
    </html>
  );
}

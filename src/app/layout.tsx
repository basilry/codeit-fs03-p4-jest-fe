import localFont from "next/font/local"

const pretendardFont = localFont({
  src: "../../public/font/PretendardVariable.woff2",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendardFont.className}>
        {children}
      </body>
    </html>
  );
}

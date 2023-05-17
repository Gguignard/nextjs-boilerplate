import "./globals.scss";

export const metadata = {
  title: "Base App",
  description: "Structure for a Next.js app with TypeScript and Sass",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

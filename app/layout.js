import "./globals.css";

export const metadata = {
  title: "Felipe. 👋️",
  description: "Front-end portfolio by Felipe Manchester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favico.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}

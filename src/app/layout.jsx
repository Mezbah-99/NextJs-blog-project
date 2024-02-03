
import SiteNavBar from "@/components/SiteNavBar";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import Progress from "@/components/ProgressBar";

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  if (!res.ok) {
    throw new Error("Site meta data fething failed!!!!");
  }
  const data = await res.json();
  const { page, description, keywords, image } = data[0];
  return {
    title: page,
    description: description,
    keywords: keywords,
    openGraph: {
      images: image,
    },
    metadataBase: new URL("https://acme.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="icon"
          href="/atis-assets/logo/atis/atis-color-sign.svg"
          type="image/svg"
        />
        <SiteNavBar />
        {children}
        <Progress/>
        <SiteFooter />
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-20">{children}</div>
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { NewsletterAutomatic } from "./sections/Newsletter";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
      <ScrollToTop />
      <Footer />
      <NewsletterAutomatic />
    </>
  );
}

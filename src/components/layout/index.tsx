import { Footer } from "./footer";
// import { HeadSetting } from "@/components/head";
import { Banner } from "./banner";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* <HeadSetting /> */}
      <section className="h-18">
        <Banner />
      </section>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

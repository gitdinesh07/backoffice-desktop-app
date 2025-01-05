import React, { ReactNode, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type CustomLayoutProps = {
  children: ReactNode;
  title?: string;
};

const CustomLayout: React.FC<CustomLayoutProps> = ({ children, title }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[#1c1c1c] text-[#fff] ">
      <Header />
      <main className="flex-grow overflow-y-auto p-4">
        <div className="container mx-auto">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default CustomLayout;

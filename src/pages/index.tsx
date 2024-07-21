import Display from "@/components/Display";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { darkSwich } from "@/utils/switchAtom";
import { useAtom } from "jotai";
import { useEffect } from "react";

const index = () => {
  const [black, setBlack] = useAtom(darkSwich);

  useEffect(() => {
    if (black) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    [black];
  });

  return (
    <>
      <Nav />

      <Display />

      <Footer />
    </>
  );
};

export default index;

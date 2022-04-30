import { ReactElement, useEffect, useState } from "react";
import "./style.css";
import { SectionHome } from "../../Layout/SectionHome/Section";
import { SectionAbout } from "../../Layout/SectionAbout/SectionAbout";
import { SectionProjects } from "../../Layout/SectionProjects";
import { SectionContacts } from "../../Layout/SectionContacts";
import { handleSmoothScroll } from "../../utils/scroll";
import { SectionFooter } from "../../Layout/SectionFooter/Footer";

export const Home = (): ReactElement => {
  const [scroll, setScroll] = useState<boolean>();
  const scrollable = () => {
    const top = window.scrollY;
    setScroll(top > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollable);
    return () => {
      window.removeEventListener("scroll", scrollable);
    };
  }, []);
  return (
    <>
      <SectionHome isScrolled={scroll} onClick={handleSmoothScroll} />
      <SectionAbout onClick={handleSmoothScroll} />
      <SectionProjects />
      <SectionContacts />
      <SectionFooter />
    </>
  );
};

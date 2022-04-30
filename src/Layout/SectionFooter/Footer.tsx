import { IconItem } from "../../Components/IconItem/IconItem";
import "./style.css";

export const SectionFooter = () => {
  return (
    <footer className="page-footer">
      <div className="footer-container">
        <IconItem
          href="https://www.facebook.com/julian.castravet"
          iconName="facebook"
          size={25}
        />
        <IconItem
          href="https://www.instagram.com/juliancastravet_official/"
          iconName="instagram"
          size={25}
        />
        <IconItem
          href="https://ie.linkedin.com/in/julian-castravet-a67698133"
          iconName="linkedin"
          size={25}
        />
        <IconItem
          href="https://github.com/juliancastravet"
          iconName="github"
          size={25}
        />
        <IconItem
          href="https://www.youtube.com/channel/UCierztLR4aA27p-sjWLg-_g"
          iconName="youtube"
          size={25}
        />
        <IconItem
          href="https://t.me/BafusAnonymous"
          iconName="telegram"
          size={25}
        />
      </div>
    </footer>
  );
};

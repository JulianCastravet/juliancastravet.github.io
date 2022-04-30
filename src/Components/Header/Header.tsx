import "./style.css";
import { MouseEvent } from "react";
import classNames from "classnames";

export interface Props {
  isScrolled?: boolean;
  onClick?: (id: string) => void;
}

export const Header = (props: Props) => {
  const { isScrolled, onClick } = props;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    //@ts-expect-error
    const id = e.target.href.split("/").pop();
    onClick?.(id);
  };
console.log("here")
  const className = classNames("header", {
    header_scrolled: isScrolled,
  });
  return (
    <header className={className}>
      <nav className="navbar">
        <a href="home" className="navbar_item" onClick={handleClick}>
          Home
        </a>
        <a href="about" className="navbar_item" onClick={handleClick}>
          About
        </a>
        <a href="projects" className="navbar_item" onClick={handleClick}>
          Projects
        </a>
        <a href="contacts" className="navbar_item" onClick={handleClick}>
          Contacts
        </a>
      </nav>
    </header>
  );
};

import classNames from "classnames";
import { MouseEvent, PropsWithChildren, useCallback } from "react";
import "./style.css";
interface Props {
  type?: "link" | "folder";
  path?: string;
  onClick?: (id: string) => void;
}

export const Button = (props: PropsWithChildren<Props>) => {
  const { type = "link", path, children, onClick } = props;
  const isLink = type === "link";
  const href = isLink ? path : "#";
  const download = isLink ? undefined : path;

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (isLink && path) {
        e.preventDefault();
        onClick?.(path);
      }
    },
    [isLink, path, onClick]
  );

  const classnames = classNames("button", {
    button_link: isLink,
  });
  return (
    <div className={classnames}>
      <a href={href} download={download} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
};

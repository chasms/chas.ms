import { css, cx } from "../../styled-system/css";

const wrapper = css({
  height: "250px",
  width: "350px",
  display: "inline-block",
  marginLeft: "50px",
  marginBottom: "50px",
  overflow: "hidden",
  boxShadow: "0px 1px 10px 1px black",
});

const galleryItemBanner = css({
  backgroundColor: "rgba(0, 0, 0, 1)",
  textAlign: "left",
  display: "flex",
  height: "50px",
  position: "relative",
  bottom: "0px",
  padding: "0px",
  transition: "bottom 0.5s ease-in-out",
  color: "azure",

  _groupHover: {
    bottom: "50px",
  },
});

interface GalleryItemProps {
  href: string;
  image: string;
  imageAltText: string;
  children: React.ReactNode;
}

export default function GalleryItem({
  href,
  image,
  imageAltText,
  children,
}: GalleryItemProps) {
  return (
    <a className={cx("group", wrapper)} href={href}>
      <img alt={imageAltText} src={image} height={250} width={350} />
      <div className={galleryItemBanner}>{children}</div>
    </a>
  );
}

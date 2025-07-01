import { styled } from "../../styled-system/jsx";

const Wrapper = styled.a`
  height: 250px;
  width: 350px;
  display: inline-block;
  margin-left: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  box-shadow: 0px 1px 10px 1px black;
`;

const GalleryItemBanner = styled.div`
  background-color: rgba(0, 0, 0, 1);
  text-align: left;
  display: block;
  height: 50px;
  position: relative;
  bottom: 0px;
  padding: 0px;
  transition: bottom 0.5s ease-in-out;
`;

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
    <Wrapper href={href}>
      <img alt={imageAltText} src={image} height={250} width={350} />
      <GalleryItemBanner>{children}</GalleryItemBanner>
    </Wrapper>
  );
}

import { styled } from "../styled-system/jsx";

export const HomeWrapper = styled.div``;

export const LogoOverlay = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 999;
  padding-top: 150px;
  top: 0%;
  transition: top 1.5s ease-in-out;
`;

export const LogoWrapper = styled.div`
  opacity: 0.3;
  transition: opacity 1.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

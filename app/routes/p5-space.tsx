import { css } from "../../styled-system/css";
import Nav from "../components/Nav";
import type { Route } from "./+types/p5-space";

export function meta({}: Route.MetaArgs) {
  return [{ title: "p5 Space" }, { name: "description", content: "p5 Space" }];
}

const iframe = css({
  width: "100%",
  height: "100%",
});

export default function p5Space() {
  return (
    <>
      <Nav />

      <iframe className={iframe} src="./p5-space/p5-space.html" />
    </>
  );
}

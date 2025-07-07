import { css } from "../../styled-system/css";
import Nav from "../components/Nav";
import { toHomeWithOpeningSequenceComplete } from "../routes";

export function meta() {
  return [{ title: "p5 Space" }, { name: "description", content: "p5 Space" }];
}

const iframe = css({
  width: "100%",
  height: "100%",
});

export default function p5Space() {
  return (
    <>
      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <iframe className={iframe} src="https://p5-space.chas.ms" />
    </>
  );
}

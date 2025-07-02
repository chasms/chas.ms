import { useEffect } from "react";
import { p5SpaceInstance } from "../.client/p5-space.client";
import Nav from "../components/Nav";
import type { Route } from "./+types/p5-space";

export function meta({}: Route.MetaArgs) {
  return [{ title: "p5 Space" }, { name: "description", content: "p5 Space" }];
}

export default function P5Space() {
  useEffect(() => {
    const { cleanup } = p5SpaceInstance();

    return cleanup; // This removes the canvas when the component is rerendered.
  }, []);

  return (
    <>
      <Nav />
    </>
  );
}

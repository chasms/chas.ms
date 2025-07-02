import Nav from "../components/Nav";
import type { Route } from "./+types/p5-space";

export function meta({}: Route.MetaArgs) {
  return [{ title: "p5 Space" }, { name: "description", content: "p5 Space" }];
}

export default function p5Space() {
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.min.js"></script>

      <script src="https://unpkg.com/p5.touchgui@0.5.2/lib/p5.touchgui.js"></script>

      <script src="p5-space.js"></script>
      <Nav />
    </>
  );
}

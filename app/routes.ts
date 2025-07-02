import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("p5-space", "routes/p5-space.tsx"),
] satisfies RouteConfig;

export enum params {
  openingSequence = "opening-sequence",
  done = "done",
}

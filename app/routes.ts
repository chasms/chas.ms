import { type RouteConfig, index, route } from "@react-router/dev/routes";

export enum RouteSlugs {
  "p5-space" = "p5-space",
  "project" = "project",
  "origin-theory" = "origin-theory",
}

export default [
  index("routes/home.tsx"),
  route(RouteSlugs["p5-space"], "routes/p5-space.tsx"),
  route(RouteSlugs["origin-theory"], "routes/origin-theory.tsx"),
  route(`${RouteSlugs.project}/:id`, "routes/gallery.tsx"),
] satisfies RouteConfig;

export enum RouteParams {
  openingSequence = "opening-sequence",
  done = "done",
}

export const toHomeWithOpeningSequenceComplete = `/?${RouteParams.openingSequence}=${RouteParams.done}`;

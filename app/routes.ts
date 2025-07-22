import { type RouteConfig, index, route } from "@react-router/dev/routes";

export enum RouteSlugs {
  "p5-space" = "p5-space",
  "website" = "website",
}

export default [
  index("routes/home.tsx"),
  route(RouteSlugs["p5-space"], "routes/p5-space.tsx"),
  route(`${RouteSlugs.website}/:id`, "routes/websites.tsx"),
] satisfies RouteConfig;

export enum params {
  openingSequence = "opening-sequence",
  done = "done",
}

export const toHomeWithOpeningSequenceComplete = `/?${params.openingSequence}=${params.done}`;

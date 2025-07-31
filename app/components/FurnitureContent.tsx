import { contentBody, contentHeading, contentWrapper } from "./content.css";

const FurnitureContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>Furniture</h1>
    <p className={contentBody}>All pieces hand made</p>
    <p className={contentBody}>
      Untitled 1 — Wax-finish MDF tabletop with hand-bent aluminum frame, iron
      oxide hardware
    </p>
    <p className={contentBody}>
      Untitled 2 — Walnut tabletop with linseed oil finish, hand-bent aluminum
      carriage, iron oxide hardware
    </p>
    <p className={contentBody}>
      Untitled Bench — Alder wood, joined with a twist on the shaker style;
      carriage formed from three legs and mortise and tenon joined braces,
      whitened with wood bleach; top finished with shellac
    </p>
  </div>
);

export default FurnitureContent;

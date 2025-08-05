import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function ReflectionsContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>Extended Reflections, 2011</h1>

      <p className={contentBody}>
        A series of long exposures capturing water and fire.
      </p>

      <p className={contentBody}>
        This series was selected for a special exhibition and spent a year on
        display in the state of Michigan&apos;s Capitol Building
      </p>
    </div>
  );
}

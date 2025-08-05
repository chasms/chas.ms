import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function PeelersContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>Potato Peeler Handle Design —</h1>

      <p className={contentBody}>
        After rigorous hours peeling potatoes in an exhaustive study to document
        the functional and ergonomic constraints of various popular peeler
        designs, I iterated on the handle design by rapid prototyping many
        mockups, first by hand and then, once modeled in CAD, with a 3axis CNC
        router. Criteria for the design included comfort, stability, control,
        and versatiliy - this peeler was specifically designed so that its rear
        curve would nest in the interior curve of the palm and provide a stable
        grip of the peeler.
      </p>
      <p className={contentBody}>
        Handmade models crafted from renshape foam, hand-carved in cherry wood,
        and CNC-cut models crafted from high density renshape. 3D modeling work
        done in Rhinoceros.
      </p>
    </div>
  );
}

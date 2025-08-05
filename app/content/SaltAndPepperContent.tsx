import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function SaltAndPepperContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>Semantic Shakers</h1>
      <p className={contentBody}>
        Designed without traditional identifiers for salt and pepper — color &
        quantity of pour holes — these shakers are instead designed to signal
        which is which via forms that reflect one another but differ overtly. An
        inherently subjective pursuit, the goal was to find forms simple enough
        that they approached a universal evocation of salt and pepper,
        respectively. At the potential expense of your seasoning, can you guess
        which is which?
      </p>
      <p className={contentBody}>
        These shakers were developed from forms of hand-lathed cherry wood,
        which was then used to create plaster molds from which the slip casts
        were created. Casts were then bisqued and fired. Some have glazes
        applied, others do not.
      </p>
    </div>
  );
}

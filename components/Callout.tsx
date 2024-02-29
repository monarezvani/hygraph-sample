"use client";
import { ActionButton } from "@/model/GetDataModel";
interface CalloutProps {
  calloutDescription?: string;
  calloutTitle?: string;
  calloutActionButton?: ActionButton;
}

const Callout = ({
  calloutTitle,
  calloutDescription,
  calloutActionButton,
}: CalloutProps) => (
  <div>
    <h3>{calloutTitle}</h3>
    <p>{calloutDescription}</p>
    {calloutActionButton && (
      <a href={calloutActionButton.buttonUrl}>
        {calloutActionButton.buttonText}
      </a>
    )}
  </div>
);
export default Callout;

"use client";
import { ActionButton } from "@/model/GetDataModel";
import Link from "next/link";
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
  <section className="section ">
    <div className="bg-calloutBg rounded-2xl p-16 text-secondary flex justify-between">
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-38 text-secondary">
          {calloutTitle}
        </span>
        <span className="text-base font-normal text-secondary mt-4 leading-30">
          {calloutDescription}
        </span>
      </div>
      <div>
        {calloutActionButton && (
          <Link
            className="button button-primary "
            href={calloutActionButton.buttonUrl}
          >
            {calloutActionButton.buttonText}
          </Link>
        )}
      </div>
    </div>
  </section>
);
export default Callout;

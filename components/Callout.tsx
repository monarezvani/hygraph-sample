"use client";
import { ActionButton, CalloutActionButton } from "@/model/GetDataModel";
import Link from "next/link";
interface CalloutProps {
  calloutDescription?: string;
  calloutTitle?: string;
  calloutActionButtons?: CalloutActionButton[];
}

export default function Callout({
  calloutTitle,
  calloutDescription,
  calloutActionButtons,
}: CalloutProps) {
  return (
    <section className=" section-mobile lg:section">
      <div className="content-mobile lg:content ">
        <div className="bg-calloutBg rounded-2xl p-8 lg:p-16 text-secondary flex justify-between flex-col lg:flex-row ">
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-38 text-secondary">
              {calloutTitle}
            </span>
            <span className="text-left lg:text-center text-base font-normal text-secondary mt-4 leading-30">
              {calloutDescription}
            </span>
          </div>

          <div className="flex flex-col justify-center mt-8 lg:mt-0">
            {calloutActionButtons &&
              calloutActionButtons.map((button, index) => (
                <Link
                  key={button.id}
                  href={button.buttonUrl}
                  className={`
                  button-primary button-md w-full md:w-fit mb-3
                      ${index % 2 === 0 ? "button-secondary" : "button-primary"}
                   
                `}
                >
                  {button.buttonText}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

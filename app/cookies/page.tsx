import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cookies",
  description: "cookies",
};
export default function Cookies() {
  return (
    <main className="flex min-h-screen flex-col relative ">
      <section className="section-mobile lg:section ">
        <div className=" content-mobile lg:content  flex flex-col items-center content-stretch content justify-center">
          <h2 className="font-bold text-semiLg md:text-xl text-headerColor leading-44 md:leading-72 tracking-title text-center mb-8 w-fit">
            Cookies
          </h2>
          <details className="text-center text-base font-normal leading-30 text-textColor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque
          </details>
        </div>
      </section>
    </main>
  );
}

import { footerItems } from "@/config/Constants";
import Link from "next/link";
export const Footer = () => {
  return (
    <section className="section">
      <div className="content">
        <footer className=" h-20">
          <div className="content flex flex-col lg:flex-row justify-between items-center">
            <div>
              <span className="text-footerColor">
                © 2023 Acme Co. All rights reserved.
              </span>
            </div>
            <div className="flex flex-row">
              <ul className="flex flex-row items-center ">
                {footerItems.map((item) => (
                  <li key={item.id} className="mx-8 leading-24">
                    <Link
                      className="text-footerColor font-normal text-xs "
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
export default Footer;

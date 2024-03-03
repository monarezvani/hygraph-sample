import { footerItems } from "@/config/Constants";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="content-mobile lg:content  border-t border-borderColor py-8 ">
        <div className="flex flex-col lg:flex-row justify-between items-center  ">
          <div className="text-footerColor order-last lg:order-first">
            © 2023 Acme Co. All rights reserved.
          </div>

          <ul className="flex flex-col lg:flex-row md:flex-row items-center ">
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
  );
}

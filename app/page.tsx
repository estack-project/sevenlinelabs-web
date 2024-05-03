import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/sevenlineLabs_Logo.png";

export default function Home() {
  return (
    <div>
      <header className="bg-slate-400 h-20 relative z-50 show">
        <div className="navigation w-full h-full max-w-[820px] my-0 mx-auto">
          <div className="head flex h-full items-center">
            <div className="head-logo text-xl font-normal break-keep">
              <Link href={"/"} className="logo h-full">
                {/** @example */}
                <Image src={Logo} alt="logo-image" className="max-w-14 max-h-10" />
                <span className="text-white">Sevenline</span>
                <span className="text-[#4e529a]">Labs</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}

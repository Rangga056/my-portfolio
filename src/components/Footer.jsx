import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="pt-10 flex items-center justify-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={38}
            height={38}
            className="rounded-[50%] aspect-square object-cover object-center"
          />
          <span className="text-black font-semibold text-lg">Eclipse Dev.</span>
        </Link>
        <p>2024 Eclipse Dev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

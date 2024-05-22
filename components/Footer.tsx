import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="m-10">
      <nav>
        <ul className="w-full flex flex-wrap justify-center items-center font-gothamSSM font-thin text-sm">
          <li className="p-2">Tesla©2024</li>
          <li className="p-2">Privacy&Legal</li>
          <li className="p-2">Vehicle Recalls</li>
          <li className="p-2">Contact</li>
          <li className="p-2">News</li>
          <li className="p-2">Get Updates</li>
          <li className="p-2">Locations</li>
        </ul>
      </nav>
    </footer>
  );
}

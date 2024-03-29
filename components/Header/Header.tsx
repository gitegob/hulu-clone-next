import { NextComponentType } from "next";
import Image from "next/image";
import HeaderItem from "../HeaderItem/HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  SearchIcon,
  TrendingUpIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={TrendingUpIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="Hulu Logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

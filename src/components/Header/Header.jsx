import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="text-3xl font-bold pt-6 pl-12">
        <Link href="/">Millennia Movie</Link>
      </div>
    </div>
  );
};

export default Header;

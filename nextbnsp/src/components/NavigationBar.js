import React from "react";
import Link from "next/link";

const NavigationBar = () => {
    return (
    <div className="flex flex-row items-center p-4 gap-4">
      <Link href="/about" className="text-blue-500 underline">
        About Us
      </Link>
      <Link href="/comittee" className="text-blue-500 underline">
        Our Committee
      </Link>
      <Link href="/about/schools" className="text-blue-500 underline">
        Contact Us
      </Link>
    </div>
    );
}

export default NavigationBar;
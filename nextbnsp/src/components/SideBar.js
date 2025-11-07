import React from "react";
import Link from "next/link";

const SideBar = () => {
    return (
        <div className="flex flex-col row-span-3 justify-items-start">
            <Link href="/">Daftar Project</Link>
            <Link href="/">Buat Project</Link>
            <Link href="/">Kesiapan Lahan</Link>
        </div>
    );
}

export default SideBar;
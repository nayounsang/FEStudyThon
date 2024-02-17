"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const NavEvent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
};

export default NavEvent;

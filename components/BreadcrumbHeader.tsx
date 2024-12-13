"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb";

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName === "/" ? [""] : pathName?.split("/");
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
        {paths.map((path,index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink className="capitalize" href={`/${path}`}>{path === "" ? "home" : path}</BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>{" "}
    </div>
  );
}

export default BreadcrumbHeader;

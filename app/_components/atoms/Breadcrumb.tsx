"use client";
import { Breadcrumb as AntBreadcrumb } from "antd";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface Props {
  BreadcrumbItems: BreadcrumbItem[];
}

export default function Breadcrumb({ BreadcrumbItems }: Props) {
  const breadcrumbs = BreadcrumbItems.map((item: BreadcrumbItem, index) => {
    return (
      <AntBreadcrumb.Item key={item.label + index}>
        <Link href={item.link}>{item.label}</Link>
      </AntBreadcrumb.Item>
    );
  });
  return <AntBreadcrumb>{breadcrumbs}</AntBreadcrumb>;
}

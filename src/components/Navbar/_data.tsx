import * as React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

export interface Link {
  label: string;
  href?: string;
  children?: Array<{
    label: string;
    description?: string;
    href: string;
    icon?: React.ReactElement;
  }>;
}

export const links: Link[] = [
  /* { label: "Services", href: "#" }, 
  {
    label: "Latest projects",
    children: [
      {
        label: "Accountability Buddy",
        description: "Wellbeing web app developed for TGL House B.V.",
        href: "https://www.thegoodlife.tools/",
        icon: <IoCodeSlash />,
      },
      {
        label: "Ace Golf",
        description:
          "Golf lesson booking platform developed for Ace Technologies B.V.",
        href: "https://www.acegolf.io",
        icon: <IoCodeSlash />,
      },
    ],
  },*/
];

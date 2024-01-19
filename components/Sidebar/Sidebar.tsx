import IconButton from "@mui/material/IconButton";
import { m } from "framer-motion";
import Icons from "../Common/Icons";
import VerticalDivider from "../Common/VerticalDivider";
import Button from "@mui/material/Button";
import Link from "next/link";
import { sidebarVariants } from "../../variants";

interface ISideBar {
  anchor: string;
  mode: string;
}

const linkData = [
  { icon: "github", link: "https://github.com/AnthonyChablov" },
  { icon: "linkedin", link: "https://www.linkedin.com/in/anthonychablov/" },
  { icon: "leetcode", link: "https://leetcode.com/AnthonyChablov/" },
];

const iconSize = 25;

const Sidebar = ({ anchor, mode }: ISideBar) => {
  return (
    <m.div
      className={`fixed bottom-0 h-fit 
            ${anchor === "left" && "left-20"} 
            ${anchor === "right" && "right-0"}`}
      variants={sidebarVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center ">
        {mode === "icons" ? (
          <>
            {linkData.map((linkName, i) => {
              return (
                <Link href={linkName.link} key={i} target="_blank">
                  <IconButton className="mt-4 ">
                    <Icons type={linkName.icon} size={iconSize} />
                  </IconButton>
                </Link>
              );
            })}
          </>
        ) : (
          <div className="rotate-90 mb-16 ">
            <Button
              className="text-sm lowercase text-zinc-700 dark:text-slate-300 "
              variant="text"
            >
              <a href="mailto: aechablov@gmail.com">aechablov@gmail.com</a>
            </Button>
          </div>
        )}
      </div>
      <VerticalDivider />
    </m.div>
  );
};

export default Sidebar;

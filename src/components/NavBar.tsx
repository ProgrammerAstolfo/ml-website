import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import React, { useEffect, useRef, useState } from "react";

const navbar: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "calc(100vw - 15px)",
  height: "40px",
};

export default function Navbar(props: { sel: string }) {
  const [hovering, setHovering] = useState(false);
  const [fullOpacity, setFullOpacity] = useState(true);

  const [screenWidth, setScreenWidth] = useState(641);
  const hasRan = useRef(false);

  const [showLinkSelector, setShowLinkSelector] = useState(false);

  if (!fullOpacity && hovering) setFullOpacity(true);

  function resize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    function updateOpacity() {
      setFullOpacity(hovering || window.scrollY < 40);
    }

    document.addEventListener("scroll", updateOpacity);
    window.addEventListener("resize", resize);
    if (!hasRan.current) {
      hasRan.current = true;
      resize();
    }

    return () => {
      document.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", resize);
    };
  }, [hovering]);

  function hoverOn() {
    setHovering(true);
  }

  function hoverOff() {
    setHovering(false);
    setFullOpacity(window.scrollY < 40);
  }

  return (
    <div style={navbar}>
      <motion.div
        variants={{
          full: {
            opacity: 1,
          },
          half: {
            opacity: 0.5,
          },
        }}
        animate={fullOpacity ? "full" : "half"}
        onPointerEnter={hoverOn}
        onPointerLeave={hoverOff}
        className="bg-[#2B0029] text-center flex text-white m-2 p-2 rounded-md"
      >
        <img src="/pfp.png" alt="Astolfo Profile Picture" className="h-6 w-6 rounded-full" />
        <span className="mx-2 font-bold">{screenWidth <= 640 ? 'Astolfo': 'Programmer Astolfo'}'s website</span>
        <br />
        <div className={screenWidth < 640 ? "hidden" : ""}>
          <a
            className={`ml-2 p-1 w-20 ${
              props.sel == "home" ? "bg-[#4A0056] rounded-md" : ""
            }`}
            href="/"
          >
            Home
          </a>
          <a
            className={`ml-2 p-1 w-24 ${
              props.sel == "meshsave" ? "bg-[#4A0056] rounded-md" : ""
            }`}
            href="/meshsave"
          >
            Meshsave
          </a>
          <a
            className={`ml-2 p-1 w-20 ${
              props.sel == "project" ? "bg-[#4A0056] rounded-md" : ""
            }`}
            href="/projects"
          >
            Projects
          </a>
          <a
            className={`ml-2 p-1 w-20 ${
              props.sel == "social" ? "bg-[#4A0056] rounded-md" : ""
            }`}
            href="/social"
          >
            Socials
          </a>
          <a
            className={`ml-2 p-1 w-24 ${
              props.sel == "pronouns" ? "bg-[#4A0056] rounded-md" : ""
            }`}
            href="/pronouns"
          >
            Pronouns
          </a>
        </div>
        <div className={screenWidth >= 640 ? "hidden" : ""}>
          <a
            className={`ml-2 w-20 ${
              showLinkSelector ? "bg-[#4A0056] rounded-md" : ""
            }`}
            onClick={() => setShowLinkSelector(!showLinkSelector)}
          >
            Navigate
          </a>
          {showLinkSelector && (
            <>
              <br />
              <br />
              <a
                className={`ml-2 p-1 w-20 ${
                  props.sel == "home" ? "bg-[#4A0056] rounded-md" : ""
                }`}
                href="/"
              >
                Home
              </a>
              <br />
              <a
                className={`ml-2 p-1 w-24 ${
                  props.sel == "meshsave" ? "bg-[#4A0056] rounded-md" : ""
                }`}
                href="/meshsave"
              >
                Meshsave
              </a>
              <br />
              <a
                className={`ml-2 p-1 w-20 ${
                  props.sel.startsWith("project")
                    ? "bg-[#4A0056] rounded-md"
                    : ""
                }`}
                href="/projects"
              >
                Projects
              </a>
              <br />
              <a
                className={`ml-2 p-1 w-20 ${
                  props.sel == "social" ? "bg-[#4A0056] rounded-md" : ""
                }`}
                href="/social"
              >
                Socials
              </a>
              <br />
              <a
                className={`ml-2 p-1 w-24 ${
                  props.sel == "pronouns" ? "bg-[#4A0056] rounded-md" : ""
                }`}
                href="/pronouns"
              >
                Pronouns
              </a>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

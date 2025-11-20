"use client";
import About from "./about/page";
import Projects from "./projects/page";
import StartYourProject from "./start_your_project/page";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300); // slight delay for render
      }
    }
  }, []);

  return (
    <main>
        <div className="blackcircle" id="home"></div>
        <Image
          src={hovered ? "/images/me2.png" : "/images/me.png"}
          alt="me"
          className="me"
          width={hovered ? 191 : 188}
          height={hovered ? 351 : 347}
        />
        <aside className="homepage">
          <div className="homepagetext">
          <p className="frontend-title">FRONTEND DEVELOPER & DESIGNER</p>
          <h1 className="homequote">It is hard to fail but it is worse never to have tried to succeed</h1>
          <p className="homequote2">My mission is to design and develop a website that you and your audience love</p>
          <div className="gettoknowme-ig"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <a href="https://www.instagram.com/radu_gh16/" target="_blank" className="gettoknowme-text">Get to know me</a>
            <a href="https://www.instagram.com/radu_gh16/" target="_blank">
              <Image src="/images/instagram-logo.png" alt="Instagram" width={56} height={56} />
            </a>
          </div>
        </div>
        </aside>
        <About/>
        <Projects/>
        <StartYourProject/>
    </main>
  );
}

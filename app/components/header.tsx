"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";


export default function Header() {

  const pathname = usePathname();

  return (
    <header>
            <ul className="container-header">
              <li><img src="/images/radulogo.png" alt="Logo" className="radulogo" /></li>
              <li><div className="smallrectangle"></div></li>
              <div className="radughimp">
                <p>RADU GHIMP</p>
              </div>
              <nav className="navlinks">
                <li className="home-button"><Link href="/">Home</Link></li>
                      {/* Smooth scroll if already on home, redirect if not */}
                {pathname === "/" ? (
                  <>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#projects">My work</a></li>
                    <li><a href="#start-project">Start your project</a></li>
                  </>
                        ) : (
                  <>
                    <li><Link href="/#about-me">About me</Link></li>
                    <li><Link href="/#projects">My work</Link></li>
                    <li><Link href="/#start-project">Start your project</Link></li>
                  </>
                )}
              </nav>
            </ul>
    </header>
  );
}

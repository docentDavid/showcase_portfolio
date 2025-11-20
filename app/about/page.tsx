import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="black-background" id="about-me"></div>
      <section className="aboutme-section">
        <Image
          src="/images/about-me.png"
          alt="about-me"
          className="aboutme-img"
          width={274}
          height={278}
        />
        <h1 className="aboutme-title">A little bit about me</h1>
        <p className="aboutme-text"><strong className="text1">Hi, I’m Ghimp Radu,</strong><strong className="text2"> a frontend developer and web designer with
        a passion to learn new things in both domains. I worked on more than
        10 projects at Fontys university learning a bunch of usefull tools to use
        as a professional and getting experience at the same time.</strong><strong className="text3"> I specialize
        in designing and creating modern, scalable brands and websites that drive business growth.</strong></p>
      </section>

      <section className="aboutme-skills">
        <div>
            <p>2+</p>
            <h3>Years of studying</h3> 
        </div>
        <div>
            <p>7+</p>
            <h3>Using useful tools</h3>
        </div>
        <div>
            <p>10+</p>
            <h3>Projects completed</h3>
        </div>
      </section>
    </main>
  );
}

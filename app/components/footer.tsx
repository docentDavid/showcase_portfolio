import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="logoandemail">
            <Image
              src="/images/radulogo.png"
              alt="Logo"
              className="radulogo"
              width={248}
              height={161}
            />
            <p>radughimp2005@gmail.com</p>
      </div>
      <p>Copyright 2025 Ghimp Radu</p>
      <div className="socials">
            <h4>Follow me on:</h4>
            <a href="https://www.instagram.com/radu_gh16/" target="_blank">
              <Image src="/images/instagram-logo.png" alt="Instagram" width={56} height={56} />
            </a>
            <a href="https://www.linkedin.com/in/radu-ghimp-a93086338/" target="_blank">
              <Image src="/images/linkedin-logo.png" alt="Linkedin" width={55} height={55} />
            </a>
            <a href="https://www.facebook.com/radu.ghimp.1" target="_blank">
              <Image src="/images/facebook-logo.png" alt="Facebook" width={55} height={55} />
            </a>
      </div>
    </footer>
  );
}
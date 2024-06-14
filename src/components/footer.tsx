import Link from "next/link";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";
import WhatsappIcon from "./icons/whatsapp";
import GmailIcon from "./icons/gmail";

export default function Footer() {
  return (
    <footer>
      <section>
        <h1>Informações de Contato</h1>
        <Link href="/contact">Me mande um email aqui</Link>
      </section>
      <section>
        <Link href="https://github.com/vulgo-rnt">
          <GithubIcon />
        </Link>
        <Link href="https://wa.me/5511960883759">
          <WhatsappIcon />
        </Link>
        <Link href="https://linkedin.com/in/vulgo-rnt">
          <LinkedinIcon />
        </Link>
        <Link href="mailto:rtoniolo4@gmail.com">
          <GmailIcon />
        </Link>
      </section>
    </footer>
  );
}

import { Copyright, Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center my-10">
      <div className="w-full flex items-center justify-between md:w-[600px] max-md:px-4">
        <div id="footerLeft" className="flex items-center gap-2 text-xs">
          <Copyright strokeWidth={1} size={12} />
          2025 zhen.software | privacy
        </div>
        <div id="footerRight" className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/bowen-chong-xian-zhen-821657180/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Linkedin
              strokeWidth={1.5}
              className="text-foreground/50 hover:text-foreground cursor-pointer"
              size={18}
            />
          </a>
          <a
            href="https://www.github.com/yamazhen"
            target="_blank"
            rel="noopener noreferer"
          >
            <Github
              strokeWidth={1.5}
              className="text-foreground/50 hover:text-foreground cursor-pointer"
              size={18}
            />
          </a>
          <a href="mailto:bowxyt@gmail.com">
            <Mail
              strokeWidth={1.5}
              className="text-foreground/50 hover:text-foreground cursor-pointer"
              size={18}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

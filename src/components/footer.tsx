import { FooterContext } from "@/routes/__root";
import { Github, Image, Instagram, Mail } from "lucide-react";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Drawer } from "vaul";

type ContactItemProps = {
  label: string;
  link: string;
  icon: string;
};
const ContactItem = ({ link, label, icon }: ContactItemProps) => {
  return (
    <a
      className={twMerge(
        "flex items-center gap-4 px-3 py-2 rounded-xl transition-colors opacity-100 level-5",
        "active:bg-gray-200/50",
        "dark:active:bg-gray-700/50",
      )}
      href={link}
      target="_blank"
    >
      {icon === "mail" ? (
        <Mail size={20} />
      ) : icon === "instagram" ? (
        <Instagram size={20} />
      ) : icon === "github" ? (
        <Github size={20} />
      ) : icon === "unsplash" ? (
        <Image size={20} />
      ) : (
        <></>
      )}
      <p className="">{label}</p>
    </a>
  );
};

export const Footer = () => {
  const fo = useContext(FooterContext);
  return (
    <Drawer.Root open={fo?.footerOpen} onOpenChange={fo?.setFooterOpen}>
      <Drawer.Overlay
        className={twMerge(
          "fixed inset-0 bg-black/40 backdrop-blur-md",
          "dark:bg-black/30",
        )}
      />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-fit">
        <Drawer.Content
          className={twMerge(
            "max-w-screen-md bg-white w-screen p-4 rounded-t-2xl mx-auto pt-4 flex flex-col gap-4",
            "dark:bg-gray-800 dark:border-gray-800 dark:text-gray-100/80",
          )}
        >
          <div className="px-3 level-4">contact me</div>
          <div className="flex flex-col gap-2">
            <ContactItem
              label="ben399399@gmail.com"
              link="mailto:ben399399@gmail.com"
              icon="mail"
            />
            <ContactItem
              label="@sunnyside_ben"
              link="https://www.instagram.com/sunnyside_ben/"
              icon="instagram"
            />
            <ContactItem
              label="JUSTIVE"
              link="https://www.github.com/JUSTIVE"
              icon="github"
            />
            <ContactItem
              label="@justive_"
              link="https://unsplash.com/@justive_"
              icon="unsplash"
            />
          </div>
        </Drawer.Content>
      </div>
    </Drawer.Root>
  );
};

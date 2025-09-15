import { FooterContext } from "@/routes/__root";
import { Github, Image, Instagram, Mail } from "lucide-react";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Drawer } from "vaul";
import contacts from "../asset/contacts.json";

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
          "fixed bottom-0 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md w-screen h-screen z-[8] transition-all duration-300 ease-out print:hidden",
        )}
      />
      <div
        className={twMerge(
          "fixed bottom-0 left-1/2 -translate-x-1/2 z-[10]",
          // py-2 px-4 pr-2 flex gap-2 items-center max-w-[calc(100%-48px)] justify-between rounded-2xl border border-gray-200 w-full backdrop-blur-sm bg-white/80 z-[10] transition-all",
          // "lg:max-w-screen-md",
          // "dark:text-white/80 dark:bg-gray-800/80 dark:border-gray-700/50",
        )}
      >
        <Drawer.Content
          className={twMerge(
            "max-w-screen-md bg-white w-screen p-4 rounded-t-2xl mx-auto pt-4 flex flex-col gap-4 z-[20]",
            "dark:bg-gray-800 dark:border-gray-800 dark:text-gray-100/80",
          )}
        >
          <div className="px-3 level-4">contact me</div>
          <div className="flex flex-col gap-2">
            {contacts.map((contact) => (
              <ContactItem key={contact.label} {...contact} />
            ))}
          </div>
        </Drawer.Content>
      </div>
    </Drawer.Root>
  );
};

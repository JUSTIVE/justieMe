import { useState } from "react";
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
        "flex items-center gap-4 px-3 py-2 rounded-xl transition-colors",
        "active:bg-gray-200/50",
        "dark:active:bg-gray-700/50",
      )}
      href={link}
      target="_blank"
    >
      <div className="w-8 h-8 rounded-full bg-gray-200/50" />
      <p className="text-sm">{label}</p>
    </a>
  );
};

export const Footer = () => {
  const [openContacts, setOpenContacts] = useState(false);
  return (
    <Drawer.Root open={openContacts} onOpenChange={setOpenContacts}>
      {/* <Drawer.Trigger asChild> */}
      <div
        className={twMerge(
          "bottom-0 w-full border-t border-gray-200 px-5 py-3 text-start text-gray-900/50",
          "dark:border-gray-800 dark:text-gray-100/50",
        )}
        onClick={(e) => {
          e.stopPropagation();
          setOpenContacts(!openContacts);
        }}
      >
        <p className="text-sm">contacts</p>
      </div>

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
          <div className="px-3 font-bold">contact me</div>
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

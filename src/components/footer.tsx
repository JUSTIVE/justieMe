import { useState } from "react";
import { Drawer } from "vaul";

export const Footer = () => {
  const [openContacts, setOpenContacts] = useState(false);
  return (
    <Drawer.Root open={openContacts} onOpenChange={setOpenContacts}>
      {/* <Drawer.Trigger asChild> */}
      <div
        className="bottom-0 w-full border-t border-gray-200 p-4 text-start text-gray-900/50"
        onClick={(e) => {
          e.stopPropagation();
          setOpenContacts(!openContacts);
        }}
      >
        <p className="text-sm">contacts</p>
      </div>
      {/* </Drawer.Trigger> */}
      <Drawer.Content className="w-full max-w-sm fixed bottom-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200/50" />
            <p className="text-sm">Minsang Kim</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200/50" />
            <p className="text-sm">minsang.kim@gmail.com</p>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};

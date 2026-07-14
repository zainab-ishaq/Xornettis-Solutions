"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

export default function AIWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <ChatButton
          onClick={() => setOpen(true)}
        />
      )}

      <ChatWindow
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
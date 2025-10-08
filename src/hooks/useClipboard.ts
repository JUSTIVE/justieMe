import { useState, useCallback } from "react";

export function useClipboard(timeout = 1500) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      if (!text) return false;

      try {
        // 최신 API 사용
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), timeout);
        return true;
      } catch (_err) {
        // fallback
        try {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          const successful = document.execCommand("copy");
          document.body.removeChild(textarea);

          if (successful) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), timeout);
            return true;
          }
        } catch (fallbackErr) {
          console.error("Clipboard copy failed", fallbackErr);
        }
        return false;
      }
    },
    [timeout],
  );

  return { copy, isCopied };
}

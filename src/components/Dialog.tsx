import { useEffect, useRef } from "react";
import type { ReactNode, KeyboardEventHandler } from "react";

type Props = {
  id: string;
  label: string;
  open: boolean;
  onClose: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLDialogElement>;
  children: ReactNode;
};

// Native dialogs provide keyboard focus trapping and Escape handling.
export function Dialog({
  id,
  label,
  open,
  onClose,
  onKeyDown,
  children,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      id={id}
      aria-label={label}
      onClose={onClose}
      onCancel={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {children}
    </dialog>
  );
}

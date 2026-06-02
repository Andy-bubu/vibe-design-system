import type { ReactNode } from 'react';
import { X } from 'lucide-react';

import { cn } from '@/utils/cn';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export function Modal({ open, onOpenChange, title, description, children, footer }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[1.5rem] border border-border-subtle bg-surface-elevated/95 p-6 shadow-panel">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-fg-primary">{title}</h3>
            {description ? <p className="mt-2 text-sm leading-6 text-fg-secondary">{description}</p> : null}
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className={cn(
              'inline-flex size-9 items-center justify-center rounded-full border border-border-subtle bg-bg-canvas/70 text-fg-secondary transition-all duration-300',
              'hover:border-border-strong hover:text-fg-primary',
            )}
            aria-label="关闭弹窗"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {children ? <div className="mt-5">{children}</div> : null}
        {footer ? <div className="mt-6 flex flex-wrap justify-end gap-3">{footer}</div> : null}
      </div>
    </div>
  );
}

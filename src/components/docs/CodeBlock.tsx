import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="rounded-2xl border border-border-subtle bg-slate-950 text-slate-100 shadow-soft">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-semibold">代码示例</p>
          <p className="text-xs text-slate-400">可直接复制到后续 Vibe Coding 流程中复用。</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all duration-300 hover:bg-white/10"
        >
          {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
          {copied ? '已复制' : '复制代码'}
        </button>
      </div>
      <pre className="scrollbar-hidden overflow-x-auto px-4 py-4 text-sm leading-7 text-slate-200">
        <code>{code}</code>
      </pre>
    </section>
  );
}

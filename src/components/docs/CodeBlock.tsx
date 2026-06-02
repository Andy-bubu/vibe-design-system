import { useState } from 'react';
import { Button, Card, message, Typography } from 'antd';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      messageApi.success('代码已复制');
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      messageApi.error('复制失败，请手动复制');
      setCopied(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Card className="overflow-hidden border-border-subtle bg-slate-950 text-slate-100 shadow-soft" styles={{ body: { padding: 0 } }}>
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <div>
            <Typography.Text strong className="!text-sm !text-slate-100">
              代码示例
            </Typography.Text>
            <Typography.Paragraph className="!mb-0 !text-xs !text-slate-400">
              可直接复制到后续 Vibe Coding 流程中复用。
            </Typography.Paragraph>
          </div>
          <Button
            onClick={handleCopy}
            size="small"
            className="!border-white/10 !bg-white/5 !text-slate-200 hover:!bg-white/10"
            icon={copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
          >
            {copied ? '已复制' : '复制代码'}
          </Button>
        </div>
        <pre className="scrollbar-hidden overflow-x-auto px-4 py-4 text-sm leading-7 text-slate-200">
          <code>{code}</code>
        </pre>
      </Card>
    </>
  );
}

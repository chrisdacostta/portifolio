import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentListItems: React.ReactNode[] = [];
  let listKey = 0;

  const parseInlineStyles = (text: string) => {
    // Splits text by bold (**text**) and markdown links ([text](url))
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-primary-warm">
            {part.slice(2, -2)}
          </strong>
        );
      }
      
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        return (
          <a
            key={i}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-accent/80 transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      
      return part;
    });
  };

  const flushList = () => {
    if (currentListItems.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="list-disc pl-6 my-4 space-y-2 text-primary/80">
          {currentListItems}
        </ul>
      );
      currentListItems = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Handle empty lines (paragraph break)
    if (!trimmed) {
      flushList();
      return;
    }

    // Headers
    if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={index} className="text-4xl md:text-5xl font-bold tracking-tight mt-10 mb-6 text-primary-warm border-b border-primary/10 pb-4">
          {trimmed.slice(2)}
        </h1>
      );
    } else if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={index} className="text-2xl md:text-3xl font-semibold tracking-tight mt-8 mb-4 text-primary-warm">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={index} className="text-xl md:text-2xl font-medium mt-6 mb-3 text-primary-warm">
          {trimmed.slice(4)}
        </h3>
      );
    }
    // Lists
    else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      currentListItems.push(
        <li key={index} className="text-sm md:text-base text-primary/80 leading-relaxed pl-1">
          {parseInlineStyles(trimmed.slice(2))}
        </li>
      );
    }
    // Standard paragraphs
    else {
      flushList();
      elements.push(
        <p key={index} className="my-4 text-sm md:text-base text-primary/80 leading-relaxed">
          {parseInlineStyles(trimmed)}
        </p>
      );
    }
  });

  // Flush any remaining list items
  flushList();

  return <div className="max-w-4xl mx-auto py-4 px-1">{elements}</div>;
};

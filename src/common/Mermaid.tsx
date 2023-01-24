import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

interface Props {
  treeText: string;
}

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

export const Mermaid = ({ treeText }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.contentLoaded();
    wrapperRef.current?.attributes.removeNamedItem('data-processed');
  }, [treeText]);

  return (
    <div className='mermaid' ref={wrapperRef}>
      {treeText}
    </div>
  );
};

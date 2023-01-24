import { Dispatch, FormEvent, SetStateAction, useRef } from 'react';

interface Props {
  setText: Dispatch<SetStateAction<string>>;
}

export const TextBox = ({ setText }: Props) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmitText(e: FormEvent) {
    e.preventDefault();
    if (!textRef || !textRef.current) return;
    setText(textRef.current.value ?? '');
    console.log(textRef.current.value);
  }

  return (
    <form onSubmit={handleSubmitText}>
      <textarea ref={textRef} />
      <button type='submit'>고고</button>
    </form>
  );
};

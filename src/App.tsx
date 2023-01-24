import { useState } from 'react';
import { Mermaid, TextBox } from './common';

const App = () => {
  const [treeText, setTreeText] = useState<string>('');

  return (
    <div className='App'>
      <TextBox setText={setTreeText} />
      <span>{treeText}</span>
      <Mermaid treeText={treeText} />
    </div>
  );
};

export default App;

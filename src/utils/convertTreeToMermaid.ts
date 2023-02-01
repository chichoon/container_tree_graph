function convertArrayToMermaid(acc: string, cur: string[]) {
  const parent = cur[0];
  const child = cur[1] ?? 'DUMMY';
  if (parent.length === 0) return acc + `${child}[${child}];\n`;
  return acc + `${parent}-->${child};\n`;
}

export function convertTreeToMermaid(treeText: string) {
  const strArr = treeText.split('\n').map((v) => v.split(','));
  const str = strArr.reduce(convertArrayToMermaid, 'graph TD\n');
  return str;
}

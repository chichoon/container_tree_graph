function convertArrayToMermaid(acc: string, cur: string[]) {
  if (cur[0].length === 0) return acc + `${cur[1]}[${cur[1]}];\n`;
  return acc + `${cur[0]}-->${cur[1]};\n`;
}

export function convertTreeToMermaid(treeText: string) {
  const strArr = treeText.split('\n').map((v) => v.split(','));
  const str = strArr.reduce(convertArrayToMermaid, 'graph TD\n');
  return str;
}

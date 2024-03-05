export function toGraphqlSyntax(obj: any): string {
  if (Array.isArray(obj)) {
    return '[' + obj.map(toGraphqlSyntax).join() + ']';
  } else if (typeof obj === 'object') {
    return (
      '{' +
      Object.keys(obj)
        .map(key => key + ':' + toGraphqlSyntax(obj[key]))
        .join() +
      '}'
    );
  } else if (typeof obj === 'number') {
    return obj.toString(10);
  } else {
    return '"' + (obj as string).replaceAll('"', '\\"') + '"';
  }
}

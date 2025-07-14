export type CodeBlock = {
  kind: 'function' | 'struct' | 'enum' | 'impl';
  code: string;
  name?: string;
};
export type VariableKey = 'GUIDED_GRAPHQL' | 'GUIDED_WEBSOCKET';

export function exists(key: VariableKey): boolean {
  return true;
}

export function get(key: VariableKey): string {
  switch (key) {
    case 'GUIDED_GRAPHQL':
      return 'http://localhost:5000';
    case 'GUIDED_WEBSOCKET':
      return 'ws://localhost:5000';
  }
  throw new Error(`No env for key=${key}`);
}

import {Platform} from 'react-native';

export type VariableKey = 'GUIDED_GRAPHQL' | 'GUIDED_WEBSOCKET';

export function exists(key: VariableKey): boolean {
  return true;
}

export function get(key: VariableKey): string {
  switch (key) {
    case 'GUIDED_GRAPHQL':
      switch (Platform.OS) {
        case 'android':
          return 'http://10.0.2.2:5000';
        case 'web':
          return 'http://196.168.86.50:5000';
        case "ios":
          return 'http://localhost:5000';
        default:
          throw new Error(`Unhandled platform ${Platform.OS}`)
      }
    case 'GUIDED_WEBSOCKET':
      switch (Platform.OS) {
        case 'android':
          return 'ws://10.0.2.2:5000';
        case 'web':
          return 'ws://196.168.86.50:5000';
        case "ios":
          return 'http://localhost:5000';
        default:
          throw new Error(`Unhandled platform ${Platform.OS}`)
      }
  }
  throw new Error(`No env for key=${key}`);
}

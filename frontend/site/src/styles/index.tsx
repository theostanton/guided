import {ViewStyle} from 'react-native';
import {border} from './colors';
import {hairline, half} from './dimensions';

export const card: ViewStyle = {
  backgroundColor: 'white',
  borderColor: border,
  borderWidth: hairline,
  borderRadius: half,
  overflow: 'hidden'
};

export const divider: ViewStyle = {
  height: hairline,
  backgroundColor: border,
};
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

export function dynamicCard(isPortrait: boolean): ViewStyle {
  if (isPortrait) {
    return {
      backgroundColor: 'white',
      width: '100%',
      borderColor: border,
      borderBottomWidth: hairline,
      borderTopWidth: hairline,
    };
  } else {
    return {
      backgroundColor: 'white',
      borderColor: border,
      borderWidth: hairline,
      borderRadius: half,
      overflow: 'hidden'
    };
  }
}

export const divider: ViewStyle = {
  height: hairline,
  backgroundColor: border,
};
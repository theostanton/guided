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

export function dynamicCard(isLandscape: boolean): ViewStyle {
  if (isLandscape) {
    return {
      backgroundColor: 'white',
      borderColor: border,
      borderWidth: hairline,
      borderRadius: half,
      overflow: 'hidden'
    };
  } else {
    return {
      backgroundColor: 'white',
      width: '100%',
      borderColor: border,
      borderBottomWidth: hairline,
      borderTopWidth: hairline,
    };

  }
}

export const divider: ViewStyle = {
  height: hairline,
  backgroundColor: border,
};
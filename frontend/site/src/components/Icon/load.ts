console.log('load')
// Load icons
// @ts-ignore
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`;
const style = document.createElement('style');
style.type = 'text/css';
// @ts-ignore
if (style.styleSheet) {
  // @ts-ignore
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
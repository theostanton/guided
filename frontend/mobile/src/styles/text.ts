import { TextStyle, StyleSheet } from "react-native"

export const h1: TextStyle = {
  fontSize: 20,
  fontWeight: "bold",
}
export const h2: TextStyle = {
  fontSize: 16,
}
export const a: TextStyle = {
  color: "#0000ff",
}
export const h3: TextStyle = {
  fontSize: 12,
  opacity: 0.66,
}
export const h5: TextStyle = {
  fontSize: 12,
  color:'#00000099'
}

export default StyleSheet.create({
  h1, h2, h3,
})
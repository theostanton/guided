import * as crypto from "crypto"

const BASE_62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"

export default function(length: number = 16): string {
  let key = ""
  const charsLength = BASE_62.length
  for (let i = 0; i < length; i++) {
    const rnBytes = crypto.randomBytes(2)
    const randomIndex = rnBytes.readUInt8(0) * 256 + rnBytes.readUInt8(1)
    key += BASE_62[randomIndex % charsLength]
  }
  return key
};

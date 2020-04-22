import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse('czcbwbak');
const iv = CryptoJS.enc.Utf8.parse('czcbwbak');

export function Decrypt() {
    let word = this.Encrypt();
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.DES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    const result = decryptedStr.toString();
    return result;
}
export function Encrypt() {
    const word = '123';
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.DES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    const result = encrypted.ciphertext.toString().toUpperCase();
    return result;
}

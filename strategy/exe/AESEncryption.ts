//AESEncryption.ts
import Encryption from "./Encryption";

class AESEncryption implements Encryption {
  send(message: string): void {
    console.log(`Encrypting "${message}" using AES`);
  }
}
export default AESEncryption;

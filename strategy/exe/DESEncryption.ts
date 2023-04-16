// DESEncryption.ts
import Encryption from "./Encryption";

class DESEncryption implements Encryption {
  send(message: string): void {
    console.log(`Encrypting "${message}" using DES`);
  }
}
export default DESEncryption;

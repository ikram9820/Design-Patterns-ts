import Encryption from "./Encryption";

export default class DESEncryption implements Encryption {
  send(message: string): void {
    console.log(`Encrypting "${message}" using DES`);
  }
}

import Encryption from "./Encryption";

export default class AESEcnrytion implements Encryption {
  send(message: string): void {
    console.log(` Encrypting "${message}" using AES`);
  }
}

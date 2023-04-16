//ChatClient.ts
import Encryption from "./Encryption";

class ChatClient {
  constructor(private _encryptionAlgorithm: Encryption) {}

  public send(message: string) {
    this._encryptionAlgorithm.send(message);
  }
  public set encryptionAlgorithm(value: Encryption) {
    this._encryptionAlgorithm = value;
  }
}
export default ChatClient;

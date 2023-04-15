import AESEcnrytion from "./AESEncryption";
import ChatClient from "./ChatClient";
import DESEncryption from "./DESEncryption";

let chat = new ChatClient(new AESEcnrytion());
chat.send("hello");
chat.encryptionAlgorithm = new DESEncryption();
chat.send("world");

// Output
// Encrypting "hello" using AES
// Encrypting "world" using DES
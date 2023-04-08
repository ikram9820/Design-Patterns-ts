import Compressor from "./Compressor";

export default class Jpeg implements Compressor{
    compress(): void {
        console.log("image compress to jpeg ")
    }
    
}
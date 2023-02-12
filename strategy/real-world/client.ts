import CloudFile from "./cloudFile.class";
import LocalFile from "./localFile.class";
import Uploader from "./uploader.class";

const fileSize = 2000;
const filePath = 'foo/bar';
let uploader: Uploader;

if (fileSize > 1000) {
    uploader = new Uploader(new CloudFile())
} else {
    uploader = new Uploader(new LocalFile())
}

uploader.saveFile(filePath);
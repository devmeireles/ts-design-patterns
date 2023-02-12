import IFile from "./file.interface";

export default class CloudFile implements IFile {
    upload(path: string): boolean {
        console.log("Uploading a file on cloud service");
        return true;
    }
    
}
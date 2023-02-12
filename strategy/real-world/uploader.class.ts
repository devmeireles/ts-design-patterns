import IFile from "./file.interface";
import IUploader from "./uploader.interface";

export default class Uploader implements IUploader {
    protected fileUploader: IFile;

    constructor(fileUploader: IFile) {
        this.fileUploader = fileUploader;
    }

    saveFile(path: string): boolean {
        return this.fileUploader.upload(path)
    }
}
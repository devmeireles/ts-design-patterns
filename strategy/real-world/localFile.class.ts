import IFile from "./file.interface";

export default class LocalFile implements IFile {
    upload(path: string): boolean {
        console.log(`Saving a file on ${path}`);
        return true;
    }

}
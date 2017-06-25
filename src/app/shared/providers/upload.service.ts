import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from '../model/upload';
import { Subject } from 'rxjs';


@Injectable()
export class UploadService {
  uploads: FirebaseListObservable<Upload[]>;
  private basePath: string = '/uploads';

  constructor (private db: AngularFireDatabase) { }


  getUploads (query = {}) {
    this.uploads = this.db.list(this.basePath, {
      query: query
    });
    return this.uploads;
  }


  //deleteUpload (upload: Upload) {
  //  this.deleteFileData(upload.$key)
  //    .then(() => {
  //      this.deleteFileStorage(upload.name);
  //    })
  //    .catch(error => console.log(error));
  //}

  // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
  pushUpload (id, upload: Upload): Subject<Upload> {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/recipes/${id}/${upload.file.name}`).put(upload.file);
    const uploadSubject = new Subject<Upload>();

    storageRef.child(`${this.basePath}/recipes/${id}`).delete();
console.log('delete: ' + `${this.basePath}/recipes/${id}/${upload.file.name}`);
    //uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //  (snapshot) => {
    //    // upload in progress
    //    upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //  },
    //  (error) => {
    //    // upload failed
    //    console.log(error);
    //  },
    //  () => {
    //    // upload success
    //    upload.url = uploadTask.snapshot.downloadURL
    //    upload.name = upload.file.name
    //   // this.saveFileData(upload);
    //    uploadSubject.next(upload);
    //  }
    //);
    return uploadSubject;
  }

  //// Writes the file details to the realtime db
  //private saveFileData (upload: Upload) {
  //  this.db.list(`${this.basePath}/`).push(upload);
  //}

  //// Writes the file details to the realtime db
  //private deleteFileData (key: string) {
  //  return this.db.list(`${this.basePath}/`).remove(key);
  //}

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage (name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}


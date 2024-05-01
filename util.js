import {ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';



function extractExt(fname) {
  var file = fname.split('/').pop();
  return file.substr(file.lastIndexOf('.')+1,file.length);
}


async function uploadImage(uri, path, fName) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const fullPath = path + '/' + fName;

    const imageRef = ref(storage, fullPath);
  
    const snapshot = await uploadBytes(imageRef, blob, {
      contentType: "image/jpeg",
    });
  
    blob.close();
  
    const url = await getDownloadURL(snapshot.ref);
  
    return { url, fName };
  }

  export { uploadImage, extractExt };
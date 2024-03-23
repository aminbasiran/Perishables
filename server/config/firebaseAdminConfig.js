import admin from "firebase-admin";
import serviceAccountKey from "../credentials/serviceAccountKey.json" with {type: 'json'};
// import fs from 'fs';

// const result = JSON.parse(fs.readFileSync('../credentials/serviceAccountKey.json'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey)
});


export default admin

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://instagram-f5d21-default-rtdb.europe-west1.firebasedatabase.app"
});

/* export default db */
//backend/src/lib/firebase.ts

import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const serviceAccountPath = path.resolve(
  process.cwd(),
  "firebase-service-account.json"
);

if (!fs.existsSync(serviceAccountPath)) {
  throw new Error("❌ Firebase service account key not found");
}

const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf8")
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;

import { IDatabase, IMain } from 'pg-promise';
import { IResult } from 'pg-promise/typescript/pg-subset';
import { initializeApp } from 'firebase/app';
import { FirebaseStorage, getStorage, ref, uploadBytes  } from 'firebase/storage';
import { IBlog } from '../../models';
import { blogs as sql } from '../../sql';
import { UUID } from 'crypto';
import dotenv from "dotenv";
import fs from 'fs';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

export class BlogsRepository {
    constructor(private db: IDatabase<any>, private pgp: IMain) {}

    list(): Promise<IBlog[]> {
        return this.db.any(sql.list);
    }

    get(id: UUID): Promise<IBlog | null> {
        return this.db.oneOrNone(sql.get, id);
    }

    delete(id: number): Promise<number> {
        return this.db.result(sql.delete, id, (r: IResult) => r.rowCount);
    }

    create(newBlog: IBlog): Promise<IBlog | null> {
        return this.db.one(sql.create, newBlog);
    }

    createWithUpload(newBlog: IBlog, fileToUpload: any): Promise<IBlog | null> {
        let tmp_path = fileToUpload.path;
        const storage: FirebaseStorage = getStorage();
        const metadata = {
            contentType: 'image/jpeg',
        };
        const uniquePath: string = `images/${Math.floor(new Date().getTime() / 1000)}${fileToUpload.originalname}`;
        const mountainImagesRef = ref(storage, uniquePath);
        uploadBytes(mountainImagesRef, fs.readFileSync(tmp_path), metadata).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        newBlog.photo = uniquePath;
        fs.unlinkSync(tmp_path);
        return this.db.one(sql.create, newBlog);
    }
}
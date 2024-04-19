import pgpromise, {IInitOptions, IMain, IDatabase} from 'pg-promise';
import dotenv from "dotenv";

dotenv.config();

const {DB_URL} = process.env;
import {IExtensions, BlogsRepository} from './repositories';

type ExtendedProtocol = IDatabase<IExtensions> & IExtensions;

// pg-promise initialization options:
const initOptions: IInitOptions<IExtensions> = {
    extend(obj: ExtendedProtocol, dc: any) {
        obj.blogs = new BlogsRepository(obj, pgp);
    }
};

// Initializing the library:
const pgp: IMain = pgpromise(initOptions);

// Creating the database instance with extensions:
const db: ExtendedProtocol = pgp(DB_URL ?? '');
export {db, pgp};
import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {IBlog} from '../../models';
import {blogs as sql} from '../../sql';
import { UUID } from 'crypto';

/*
 This repository mixes hard-coded and dynamic SQL, just to show how to use both.
*/

export class BlogsRepository {

    /**
     * @param db
     * Automated database connection context/interface.
     *
     * If you ever need to access other repositories from this one,
     * you will have to replace type 'IDatabase<any>' with 'any'.
     *
     * @param pgp
     * Library's root, if ever needed, like to access 'helpers'
     * or other namespaces available from the root.
     */
    constructor(private db: IDatabase<any>, private pgp: IMain) {}

    // Returns all blog records;
    list(): Promise<IBlog[]> {
        return this.db.any(sql.list);
    }

    // gets blog by id
    get(id: UUID): Promise<IBlog | null> {
        return this.db.oneOrNone(sql.get, id);
    }

    delete(id: number): Promise<number> {
        return this.db.result(sql.delete, id, (r: IResult) => r.rowCount);
    }

    create(newBlog: IBlog): Promise<IBlog | null> {
        console.log(newBlog.title);
        return this.db.one(sql.create, newBlog);
    }
}
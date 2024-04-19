import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {IBlog} from '../../models';
import {blogs as sql} from '../../sql';

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

    // Adds a new record and returns the full object;
    // It is also an example of mapping HTTP requests into query parameters;
    // add(values: { userId: number, name: string }): Promise<IBlog> {
    //     return this.db.one(sql.add, {
    //         userId: +values.userId,
    //         productName: values.name
    //     });
    // }

    // Tries to delete a product by id, and returns the number of records deleted;
    remove(id: number): Promise<number> {
        return this.db.result('DELETE FROM public.blogs WHERE id = $1', +id, (r: IResult) => r.rowCount);
    }

    // Tries to find a user blog from user id + product name;
    // find(values: { userId: number, name: string }): Promise<IBlog | null> {
    //     return this.db.oneOrNone(sql.find, {
    //         userId: +values.userId,
    //         productName: values.name
    //     });
    // }

    // Returns all blog records;
    list(): Promise<IBlog[]> {
        return this.db.any(sql.list);
    }

    // Returns the total number of blogs;
    // total(): Promise<number> {
    //     return this.db.one('SELECT count(*) FROM public.blogs', [], (data: { count: string }) => +data.count);
    // }
}
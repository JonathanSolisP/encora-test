import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {IBlog} from '../../models';
import {blogs as sql} from '../../sql';
import { UUID } from 'crypto';

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
}
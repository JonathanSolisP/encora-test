import { QueryFile, IQueryFileOptions } from 'pg-promise';
import { join } from 'path';

export const blogs = {
    create: sql('public/blogs/create.sql'),
    list: sql('public/blogs/list.sql'),
    get: sql('public/blogs/get.sql'),
    delete: sql('public/blogs/delete.sql'),
};

function sql(file: string): QueryFile {
    const fullPath: string = join(__dirname, file);
    const options: IQueryFileOptions = {
        minify: true
    };
    const qf: QueryFile = new QueryFile(fullPath, options);
    if (qf.error) {
        console.error(qf.error);
    }

    return qf;
}

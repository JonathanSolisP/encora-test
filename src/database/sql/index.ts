import {QueryFile, IQueryFileOptions} from 'pg-promise';
import {join} from 'path';

export const blogs = {
    find: sql('public/products/find.sql'),
    add: sql('public/products/add.sql'),
    list: sql('public/blogs/list.sql'),
    get: sql('identity/account/get.sql')
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

import {BlogsRepository} from './public/blog';

// Database Interface Extensions:
interface IExtensions {
    blogs: BlogsRepository
}

export {
    IExtensions,
    BlogsRepository
};
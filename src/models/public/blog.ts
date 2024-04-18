export default class Blog {

    private _id: string;
    private _title: string;
    private _content: string;
    private _photo: string;

    constructor(id: string, title: string, content: string, photo: string) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._photo = photo;
    }

    get title() {
        return this._title;
    }

    set title(val: string) {
        this._title = val;
    }

    get id() {
        return this._id;
    }

    get content() {
        return this._content;
    }

    set content(val: string) {
        this._content = val;
    }

    get photo() {
        return this._photo;
    }

    set photo(val: string) {
        this._photo = val;
    }
}
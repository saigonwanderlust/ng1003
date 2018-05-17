export class Word {
    _id: string;
    constructor(
        public en: string,
        public vn: string,
        public isMemorized = false
    ) {
        this._id = Math.round(Math.random() * 10000) + '';
    }
}

export const WORDS: Word[] = [
    new Word('one', 'mot', true),
    new Word('two', 'hai', false),
    new Word('three', 'ba', false),
    new Word('four', 'bon', true),
];

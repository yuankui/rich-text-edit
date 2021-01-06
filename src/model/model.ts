export interface Block {
    type: string,
    attr: any,
    children: [Block | Inline];
}

export interface Inline {
    type: string,
    attr: any,
    children: [string | Inline]
}
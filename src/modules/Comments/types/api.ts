export type AuthorItemType = {
    id: number;
    name: string;
    avatar: string;
}

export type PaginationType = {
    page: number;
    size: number;
    total_pages: number
}

export type CommentItemType = {
    id: number;
    author: number;
    created: string | Date;
    likes: number;
    text: string;
    parent: number | null;
}

export type CommentsType = {
    pagination: PaginationType
    data: CommentItemType[]
}

export type GetAuthorsResponceType = Promise<AuthorItemType[]>
export type GetCommentsResponceType = Promise<CommentsType>
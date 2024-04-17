import {makeAutoObservable, runInAction} from "mobx";

import getAuthorsRequest from "src/api/authors/getAuthorsRequest";
import getCommentsRequest from "src/api/comments/getCommentsRequest";

import {sortCommentsByParent, sortByDate} from "src/common/utils";
import {requestWithRetry} from "src/common/utils/api";

import {
    AuthorItemType,
    CommentItemType,
    CommentsType,
    GetAuthorsResponceType,
    PaginationType,
} from "../types/api";

type InitialState = {
    isLoading: boolean;
    error: {
        comments: null | string;
        authors: null | string;
    };
    total: {
        likes: number;
        comments: number;
    };
    comments: CommentItemType[];
    authors: AuthorItemType[];

    pagination: PaginationType;
    currentPage: number;
};

class CommentsStore {
    state: InitialState = {
        isLoading: false,
        error: {
            comments: null,
            authors: null,
        },

        total: {
            likes: 0,
            comments: 0,
        },

        comments: [],
        authors: [],

        pagination: {
            page: 0,
            size: 0,
            total_pages: 0,
        },
        currentPage: 1,
    };

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    clearState = () => {
        this.setAuthors([]);
        this.setComments([]);
        this.setPaginationData({
            page: 0,
            size: 0,
            total_pages: 0,
        });
        this.setTotal("comments", 0);
        this.setTotal("likes", 0);
        this.setCurrentPage(1);
    };

    setLoading = (value: boolean) => {
        this.state.isLoading = value;
    };

    setError = (field: keyof InitialState["error"], text: null | string) => {
        this.state.error[field] = text;
    };

    setTotal = (field: keyof InitialState["total"], value: number) => {
        this.state.total[field] = value;
    };

    setCurrentPage = (page: number) => {
        this.state.currentPage = page;
    };

    setPaginationData = (data: PaginationType) => {
        this.state.pagination = data;
    };

    setAuthors = (authors: AuthorItemType[]) => {
        this.state.authors = authors;
    };

    setComments = (comments: CommentItemType[]) => {
        this.state.comments = comments;
    };

    getAuthor = (id: number) => {
        return this.state.authors.find((author) => author.id === id);
    };

    calculateTotalLikes = () => {
        this.setTotal(
            "likes",
            this.state.comments.reduce(
                (acc, comment) => acc + comment.likes,
                0,
            ),
        );
    };

    getInitData = async () => {
        this.setLoading(true);
        try {
            await Promise.allSettled([this.getAuthors(), this.getComments()]);
        } catch (error) {
            console.error(error);
        } finally {
            this.setLoading(false);
        }
    };

    getAuthors = async () => {
        try {
            const resp = await (getAuthorsRequest() as GetAuthorsResponceType);
            this.setAuthors(resp);
            return true;
        } catch (error) {
            this.setError("authors", null);
            this.setError("authors", "Ошибка на сервере");
            return false;
        }
    };

    getComments = async (page: number = 1) => {
        this.setLoading(true);
        try {
            const resp = await requestWithRetry<CommentsType>(() =>
                getCommentsRequest(page),
            );
            if (resp) {
                const sortedByDateComments = sortByDate(resp.data);

                const newSortedComments = sortCommentsByParent(
                    sortedByDateComments,
                    null,
                );

                // const allComments = [
                //     ...this.state.comments,
                //     ...newSortedComments,
                // ];

                runInAction(() => {
                    this.setError("comments", null);
                    this.setComments(newSortedComments);
                    this.setTotal("comments", newSortedComments.length);
                    this.calculateTotalLikes();
                    this.setPaginationData(resp.pagination);
                });
                return true;
            } else {
                this.setError("comments", "Ошибка на сервере");
            }
        } catch (error) {
            this.setError("comments", "Ошибка на сервере");
            return false;
        } finally {
            this.setLoading(false);
        }
    };
}

const commentsStore = new CommentsStore();

export default commentsStore;

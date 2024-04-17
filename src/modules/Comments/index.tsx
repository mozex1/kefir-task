import {useEffect} from "react";
import {observer} from "mobx-react-lite";

import commentsStore from "./store/CommentsStore";
import CommentItem from "./components/CommentItem";
import TotalInfo from "./components/TotalInfo";
import {formattedDate} from "src/common/utils";
import {Spinner} from "src/ui/Spinner";
import ErrorNotification from "src/ui/ErrorNotification";
import Button from "src/ui/Button";

const Comments = observer(() => {
    const {comments, pagination, currentPage, isLoading, error} =
        commentsStore.state;

    const errorText = error.comments || error.authors;
    const isNeedLoadMoreBtn = currentPage < pagination.total_pages;

    useEffect(() => {
        commentsStore.getInitData();
    }, []);

    if (isLoading && !comments.length) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <Spinner />
            </div>
        );
    }

    const loadMoreClick = async () => {
        const nextPage =
            currentPage + 1 <= pagination.total_pages
                ? currentPage + 1
                : currentPage;
        const res = await commentsStore.getComments(nextPage);
        if (res) commentsStore.setCurrentPage(nextPage);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const loadMoreBtn = isNeedLoadMoreBtn ? (
        <Button isLoading={isLoading} onClick={loadMoreClick} />
    ) : null;

    return (
        <div className="w-[1350px] min-h-screen h-full text-white flex flex-col items-center">
            <div className="max-w-[600px] flex flex-col gap-8 px-5 py-10">
                <TotalInfo />
                {errorText && (
                    <ErrorNotification>{errorText}</ErrorNotification>
                )}
                {comments.map((parentComment) => {
                    const {author, text, created, id, parent} = parentComment;
                    const authorInfo = commentsStore.getAuthor(author);

                    if (!authorInfo) return null;
                    const {avatar, name} = authorInfo;
                    const date = formattedDate(created);

                    return (
                        <CommentItem
                            key={`${author}-${id}`}
                            commentId={id}
                            avatar={avatar}
                            name={name}
                            comment={text}
                            date={date}
                            className={parent ? "pl-[44px]" : ""}
                        />
                    );
                })}
                {loadMoreBtn}
            </div>
        </div>
    );
});

export default Comments;

import {useState} from "react";
import {observer} from "mobx-react-lite";

import LikeSvg from "src/modules/Comments/icons/LikeSvg";
import commentsStore from "src/modules/Comments/store/CommentsStore";

type Props = {
    commentId: number;
};

const Like = observer(({commentId}: Props) => {
    const [isLiked, setIsLiked] = useState(false);

    const comment = commentsStore.state.comments.find(
        (item) => item.id === commentId,
    );

    const onLike = () => {
        if (!comment) return undefined;

        if (isLiked) comment.likes -= 1;
        else comment.likes += 1;

        commentsStore.calculateTotalLikes();
        setIsLiked((v) => !v);
    };

    return (
        <div
            onClick={onLike}
            className="flex items-center gap-2 cursor-pointer"
        >
            <LikeSvg type={isLiked ? "fill" : "empty"} />
            {comment?.likes}
        </div>
    );
});

export default Like;

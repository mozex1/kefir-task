import Like from "./components/Like";

type Props = {
    commentId: number;
    avatar: string;
    name: string;
    date: string;
    comment: string;
    className?: string;
};

const CommentItem = ({
    commentId,
    avatar,
    name,
    date,
    comment,
    className,
}: Props) => {
    return (
        <div className={`${className}`}>
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-5">
                    <img
                        className="h-[68px] w-[68px] rounded-[999px] object-cover shrink-0"
                        src={avatar}
                        alt={name}
                    />
                    <div className="flex flex-col">
                        <div className="font-bold">{name}</div>
                        <div className="text-[#8297AB]">{date}</div>
                    </div>
                </div>
                <Like commentId={commentId} />
            </div>
            <div className="pl-[88px] pr-2">{comment}</div>
        </div>
    );
};

export default CommentItem;

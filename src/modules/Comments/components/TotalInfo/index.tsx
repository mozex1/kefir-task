import {observer} from "mobx-react-lite";
import commentsStore from "../../store/CommentsStore";
import LikeSvg from "../../icons/LikeSvg";

const TotalInfo = observer(() => {
    const {total, comments} = commentsStore.state;
    if (!comments.length) return null;

    return (
        <div className="w-full flex justify-between pb-2 border-b border-b-[#767676]/50">
            <div className="font-bold">{total.comments} комментариев</div>
            <div className="flex items-center gap-2">
                <LikeSvg className="grayscale" />
                <div>{total.likes}</div>
            </div>
        </div>
    );
});

export default TotalInfo;

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { CommentItemType } from "src/modules/Comments/types/api";

dayjs.extend(utc);
dayjs.extend(timezone);

export function formattedDate(date : string | Date) {
    const inputDate = dayjs.utc(date); 
    const now = dayjs.utc(); 
  
    const diffHours = now.diff(inputDate, 'hour');
  
    if (diffHours === 1) {
        return "1 час назад"
    } else if (diffHours === 2) {
        return "2 часа назад"
    } else if (diffHours === 3) {
        return "3 часа назад"
    } else {
      return inputDate.format("DD.MM.YYYY, HH:mm:ss");;
    }
}

export function sortByDate<T extends {created: string | Date}>(comments: T[]): T[] {
    return comments.sort((a, b) => {
        const dateA = dayjs.utc(a.created);
        const dateB = dayjs.utc(b.created);
        return dateA.isBefore(dateB) ? 1 : -1;
    });
}


export function sortCommentsByParent(comments: CommentItemType[], parentId: number | null): CommentItemType[] {
    const result: CommentItemType[] = [];
    const addedIds = new Set<number>();

    const addComments = (parentId: number | null) => {
        comments.filter(comment => comment.parent === parentId).forEach(comment => {
            if (!addedIds.has(comment.id)) {
                result.push(comment);
                addedIds.add(comment.id);
                addComments(comment.id);
            }
        });
    };

    addComments(parentId);

    return result;
}
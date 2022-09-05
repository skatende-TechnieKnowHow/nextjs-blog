// Date Formatting will exported and imported into pages/posts/[id].js
// used in Post Component like so <Date dateString={postData.date} />

import { parseISO, format } from 'date-fns';

const Date = ({ dateString }) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default Date
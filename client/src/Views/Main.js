import React, { useState } from 'react';
import AuthorList from '../Components/ListAuthors';

const Main = (props) => {
    const [authorList, setAuthorList] = useState([]);

    return (
        <div>
            <AuthorList authorList={authorList} setAuthorList={setAuthorList} />
        </div>

    )
}
export default Main;

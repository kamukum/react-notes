import React from 'react';
import {useSearchParams} from 'react-router-dom'

const Detail = () => {
  const [search, setSerach] = useSearchParams()
  return (
    <ul>
      <li>{search.get('id')}</li>
      <li>{search.get('title')}</li>
      <li>{search.get('content')}</li>
    </ul>
  );
}

export default Detail;

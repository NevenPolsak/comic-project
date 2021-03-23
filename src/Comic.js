import React from 'react'

const Comic = (props) => {
  const { id, img, title, author } = props;

  return (
    <article className="comic" key={id}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
export default Comic

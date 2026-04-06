import React from 'react';

const commentsData = [
  {
    name: 'Kristin Watson',
    imgUrl: '/images/avatar_6.png',
    comment:
      'Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudinsollicitudin.',
  },
  {
    name: 'Courtney Henry',
    imgUrl: '/images/avatar_5.png',
    comment:
      'Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudinsollicitudin.',
  },
];

export default function CommentList() {
  return (
    <ol className="comment-list cs_pb_96 cs_pl_0">
      {commentsData.map((item, index) => (
        <li className="comment" key={index}>
          <div className="comment-body">
            <div className="comment-author vcard">
              <img className="avatar" src={item.imgUrl} alt="Author" />
              <a href="/" className="url">
                {item.name}
              </a>
            </div>
            <div className="reply">
              <a className="comment-reply-link" href="/">
                Reply
              </a>
            </div>
            <p>{item.comment}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

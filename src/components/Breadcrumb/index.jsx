import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ bgUrl, title }) {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter(segment => segment !== '');
    setUrlSegments(pathSegments);
  }, []);
  return (
    <section
      className="cs_page_header position-relative background-filled d-flex align-items-center justify-content-between"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container position-relative z-index-1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb cs_fs_18 cs_mb_5">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {urlSegments.map((segment, index) => (
              <li key={index} className="breadcrumb-item text-capitalize">
                {index < urlSegments.length - 1 ? (
                  <Link to={`/${urlSegments.slice(0, index + 1).join('/')}`}>
                    {segment}
                  </Link>
                ) : (
                  <span>{segment}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="cs_fs_48 cs_fs_lg_36 text-white m-0">{title}</h1>
      </div>
      <div className="position-absolute end-0 bottom-0">
        <svg
          width={660}
          height={497}
          viewBox="0 0 660 497"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240 0H660L430 497H0L240 0Z"
            fill="url(#paint0_linear_81_9510)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_81_9510"
              x1={330}
              y1="78.2497"
              x2="375.052"
              y2="780.743"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} offset="none" />
              <stop offset="0.9999" stopColor="#D9D9D9" stopOpacity="0.35" />
              <stop offset={1} stopColor="#222121" stopOpacity={0} />
              <stop offset={1} stopColor="#222121" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

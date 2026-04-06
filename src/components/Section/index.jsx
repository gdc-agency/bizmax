import React from 'react';

export default function Section({
  pt = '0',
  ptLg = '0',
  pb = '0',
  pbLg = '0',
  children,
  className,
  bgImg,
  ...props
}) {
  return (
    <section
      className={`background-filled cs_pt_${pt} cs_pt_lg_${ptLg} cs_pb_${pb} cs_pb_lg_${pbLg} ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </section>
  );
}

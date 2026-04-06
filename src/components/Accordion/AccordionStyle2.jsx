
import { React, useState, useRef, useEffect } from 'react';

function AccordionItem ({ title, desc, isOpen, onClick }){
  const accordionContentRef = useRef(null);

  return (
    <div className={`cs_accordian bg-white ${isOpen ? "active" : "" }`}>
      <div className="cs_accordian_head">
        <h2 className="cs_accordian_title cs_transition_3 cs_fs_16 fw-medium m-0 cs_pl_25 cs_pt_18 cs_pb_18 cs_pr_35" onClick={onClick}>
          {title}
        </h2>
        <span className="cs_accordian_toggle" />
      </div>
      <div className="cs_accordian_body"  ref={accordionContentRef}>
        <p className="m-0 cs_pl_25 cs_pr_25 cs_pb_20">{desc}</p>
      </div>
    </div>
  );
}


export default function AccordionStyle2 ({ data }) {
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <div className="cs_accordians cs_style_1">
      {data.map((item, index)=>(
        <AccordionItem 
          key={index} 
          title={item.title} 
          desc={item.desc} 
          isOpen={index === openItemIndex} 
          onClick={() => handleItemClick(index)} 
        />
      ))}
    </div>
  );
}





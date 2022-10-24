import React from "react";

const AccordionItem = ({
    showDescription,
    ariaExpanded,
    fontWeightBold,
    item,
    index,
    onClick,
}) => (
    <div className="faq__question" key={item.question}>
        <div>
        <button
            aria-expanded={ariaExpanded}
            aria-controls={`faq${index + 1}_desc`}
            data-qa="faq__question-button"
            className={`faq__question-button ${fontWeightBold} text-tpurple text-2xl md:text-3xl text-left`}
            onClick={onClick}
        >
            {item.question}
        </button>
        </div>
        <div>
        <div
            id={`faq${index + 1}_desc`}
            data-qa="faq__desc"
            className={`faq__desc ${showDescription} text-xl leading-none md:leading-tight md:text-2xl`}
        dangerouslySetInnerHTML={{__html: item.answer}}/>
        </div>
    </div>
);

export default AccordionItem;
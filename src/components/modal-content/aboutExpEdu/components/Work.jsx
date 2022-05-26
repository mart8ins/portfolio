import React from "react";

const Work = ({ eng, data, top, center, bottom, previousExp, nextExp }) => {
    return (
        <>
            {data && top >= 0 && (
                <div className={`__data `} onClick={previousExp}>
                    <div className="card__on__top__active">
                        <div className="triangle__top"></div>
                    </div>
                    <div className="top__">{eng ? data.data[top].eng.to : data.data[top].lv.to}</div>
                    <div className="mid__top">{eng ? data.data[top].eng.profession : data.data[top].lv.profession}</div>
                    <div className="mid__bottom">{eng ? data.data[top].eng.company : data.data[top].lv.company}</div>
                    <div className="bottom__">{eng ? data.data[top].eng.from : data.data[top].lv.from}</div>
                </div>
            )}

            {data && (
                <div className={`__data middle__card`}>
                    <div className="top__">{eng ? data.data[center].eng.to : data.data[center].lv.to}</div>
                    <div className="mid__top">{eng ? data.data[center].eng.profession : data.data[center].lv.profession}</div>
                    <div className="mid__bottom">{eng ? data.data[center].eng.company : data.data[center].lv.company}</div>
                    <div className="bottom__">{eng ? data.data[center].eng.from : data.data[center].lv.from}</div>
                </div>
            )}

            {data && bottom < data.data.length && (
                <div className={`__data `} onClick={nextExp}>
                    <div className="card__on__top__active">
                        <div className="triangle__bottom"></div>
                    </div>

                    <div className="top__">{eng ? data.data[bottom].eng.to : data.data[bottom].lv.to}</div>
                    <div className="mid__top">{eng ? data.data[bottom].eng.profession : data.data[bottom].lv.profession}</div>
                    <div className="mid__bottom">{eng ? data.data[bottom].eng.company : data.data[bottom].lv.company}</div>
                    <div className="bottom__">{eng ? data.data[bottom].eng.from : data.data[bottom].lv.from}</div>
                </div>
            )}
        </>
    );
};

export default Work;

import React from "react";

const Education = ({ eng, data, top, center, bottom }) => {
    console.log(data);
    return (
        <>
            {data && (
                <div className={`__data `}>
                    <div className="top__">
                        {eng
                            ? `${data.data[0].eng.diploma.title} ${data.data[0].eng.diploma.year}`
                            : `${data.data[0].lv.diploma.title} ${data.data[0].lv.diploma.year}`}
                    </div>
                    <div className="mid__top">{eng ? `${data.data[0].eng.education}` : `${data.data[0].lv.education}}`}</div>
                    <div className="mid__bottom">{eng ? `${data.data[0].eng.school}` : `${data.data[0].lv.school}`}</div>
                </div>
            )}

            {data && (
                <div className={`__data middle__card`}>
                    <div className="top__">
                        {eng
                            ? `${data.data[1].eng.diploma.title} ${data.data[1].eng.diploma.year}`
                            : `${data.data[1].lv.diploma.title} ${data.data[1].lv.diploma.year}`}
                    </div>
                    <div className="mid__top">{eng ? `${data.data[1].eng.education}` : `${data.data[1].lv.education}}`}</div>
                    <div className="mid__bottom">{eng ? `${data.data[1].eng.school}` : `${data.data[1].lv.school}`}</div>
                </div>
            )}

            {data && (
                <div className={`__data `}>
                    <div className="top__">
                        {eng
                            ? `${data.data[1].eng.diploma.title} ${data.data[1].eng.diploma.year}`
                            : `${data.data[1].lv.diploma.title} ${data.data[1].lv.diploma.year}`}
                    </div>
                    <div className="mid__top">{eng ? `${data.data[1].eng.education}` : `${data.data[1].lv.education}}`}</div>
                    <div className="mid__bottom">{eng ? `${data.data[1].eng.school}` : `${data.data[1].lv.school}`}</div>
                </div>
            )}
        </>
    );
};

export default Education;

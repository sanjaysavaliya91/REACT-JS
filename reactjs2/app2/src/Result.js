import React from 'react'
const Result = () => {
    return (
        <div id="latest-post" className="post">
            <h1 className="title">Result</h1>
            <b>
            </b>
            <div className="entry">
                <table border={1} cellSpacing={0} cellPadding={0} id="detailtable">
                    <tbody><tr>
                        <td width={131}><p align="center"><strong>Course</strong></p></td>
                        <td width={150}><p align="center"><strong>Year</strong></p></td>
                        <td width={150}><p align="center"><strong>Result</strong></p></td>
                    </tr>
                        <tr>
                            <td width={131}><p align="center"><strong>B.Ed </strong></p></td>
                            <td width={150}><p align="center"><strong>2020-2021</strong></p></td>
                            <td width={150}><p align="center"><strong>100% ALL TRAINEES PASSED WITH DISTINCTION</strong></p></td>
                        </tr>
                        <tr>
                            <td width={131}><p align="center"><strong>B.Ed </strong></p></td>
                            <td width={150}><p align="center"><strong>2021-2022</strong></p>
                            </td><td width={150}><p align="center"><strong>100% ALL TRAINEES PASSED WITH DISTINCTION</strong></p></td>
                        </tr>
                    </tbody></table>
            </div>
        </div>

    );
}
export default Result;
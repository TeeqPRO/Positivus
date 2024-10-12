import React from 'react'

import './case_studies.css'

import LinkVer3 from '../assets/link/ver3/linkVer3'

const Case_studies = () => {
  return (
    <div className="Case_studies">
        <div className="Title">
            <h2 className="headingVer1">Case Studies</h2>
            <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>
        <div className="Content">
            <table>
                <tr>
                    <td className='left'>
                        <div className="inside">
                            <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                            <LinkVer3 />
                        </div>
                    </td>
                    <td className='middle'>
                        <div className="indside">
                            <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                            <LinkVer3 />
                        </div>
                    </td>
                    <td className='right'>
                        <div className="inside">
                            <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                            <LinkVer3 />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
     </div>
  )
}

export default Case_studies
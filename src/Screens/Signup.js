import React from 'react'
import { useState } from 'react'
import { ACCOUNT_TYPE } from '../utils/constants'
import Tab from '../Pages/Tab';
 
const Signup = () => {
   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CANDIDATE);

   //data to pass to Tab component
   const tabData = [
    {
        id: 1,
        tabName: "Candidate",
        type: ACCOUNT_TYPE.CANDIDATE,
    },
    {
        id: 2,
        tabName: "Company",
        type: ACCOUNT_TYPE.COMPANY,
    },
]
  return (
    <>
    <div>
        <Tab tabData={tabData} field={accountType} setField={setAccountType}/>
    </div>

    </>
  )
}

export default Signup
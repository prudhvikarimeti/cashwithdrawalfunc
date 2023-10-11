import React from 'react'
import DenominationItem from '../DenominationItem'
import { useState } from 'react'
import './index.css'


function CashWithdrawal(props) {
    const[balance,setBalance]=useState(2000);

   const updateBalance=(value)=>{
        setBalance(balance-value)
    }

    const {denominationsList}=props
    const name="Sarah Williams"
    const initial=name.slice(0,1)
  return (
    <div className='main-container'>
    <div className='cash-withdrawal-container'>
        <div className='users-details-container'>
            <div className='initial-container'>
<p className='initial'>{initial}</p>
            </div>
            <p className='name'>{name}</p>
        </div>
        <div className='balance-container'>
<p className='your-balance'>Your Balance</p>
<p className='balance'>{balance}<br/><span className='currency'>In Rupees</span></p>
        </div>
        <p className='withdraw'>Withdraw</p>
        <p className='choose-sum'>CHOOSE SUM (IN RUPEES)</p>
        <ul className='denominations-list'>
            {denominationsList.map(eachDenomination=>(
                <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={updateBalance}/>
            ))}
        </ul>
    </div>
      
    </div>
  )
}

export default CashWithdrawal

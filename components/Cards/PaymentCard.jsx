import React from 'react'

const PaymentCard = () => {
  return (
    <div className='h-full shadow-lg  w-full shadow-xl bg-white space-y-8 rounded-lg p-4'>
        <p className='font-manrope'>Latest Transactions</p>

        <div className='space-y-3'>
            <Transaction
            title={"Annual Subscription"}
            date={"27th May, 2023"}
            amount={"N10,000"}/>
            <Transaction
            title={"AGM Due"}
            date={"27th May, 2023"}
            amount={"N20,000"}/>
            <Transaction
            title={"Charles Donation"}
            date={"27th May, 2023"}
            amount={"N10,000"}/>
            <Transaction
            title={"Gen Hangout"}
            date={"27th May, 2023"}
            amount={"N10,000"}/>
        </div>
    </div>
  )
}

const Transaction = ({title, date, amount}) => (
    <div className='flex justify-between'>
        <div className='flex gap-3'>
            <div className='p-5 rounded bg-green-200'></div>

            <div className='space-y-1'>
                <p className='font-manrope text-sm'>{title}</p>
                <p className='font-figtree text-xs text-gray-500'>{date}</p>
            </div>            
        </div>


        <div className='font-figtree'>
           <p className='font-semibold'>{amount}</p> 
        </div>
    </div>
)

export default PaymentCard
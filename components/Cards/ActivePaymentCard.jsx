import React from 'react'

const ActivePaymentCard = () => {
  return (
    <div className='bg-white rounded-lg p-4 shadow-lg space-y-4'>
        <p className='font-manrope font-semibold'>Active Payments</p>

        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y table-auto'>
            <tbody className='divide-y'>
              <tr className='font-manrope text-xs uppercase'>
                <td className='py-2 px-3 whitespace-nowrap'>Title</td>
                <td className='py-2 px-3 whitespace-nowrap'>Trans. Description</td>
                <td className='py-2 px-3 whitespace-nowrap'>Amount</td>
                <td className='py-2 px-3 whitespace-nowrap'>Due Date</td>
                <td className='py-2 px-3 whitespace-nowrap'></td>
              </tr>
              
              <tr className='font-figtree text-sm'>
                <td className='py-2 px-3 whitespace-nowrap'>AGM Donation</td>
                <td className='py-2 px-3 '>This is for the upcomin.</td>
                <td className='py-2 px-3 whitespace-nowrap'>N10,000.00</td>
                <td className='py-2 px-3 whitespace-nowrap'>27th May</td>
                <td className='py-2 px-3 whitespace-nowrap'>
                  <button className='bg-blue-500 p-2 text-xs rounded text-white'>Pay Now</button>
                </td>
              </tr>                    
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default ActivePaymentCard
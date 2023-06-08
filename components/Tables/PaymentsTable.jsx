import React from 'react'

const PaymentsTable = () => {
  return (
    <div className='bg-white p-4 rounded-lg overflow-x-auto'>
        <table className='table-auto w-full divide-y'>
            <thead className='font-manrope text-xs uppercase text-left'>
                <tr>
                    <th className='py-2 font-light'>Trans Id</th>
                    <th className='py-2 font-light'>Title</th>
                    <th className='py-2 font-light'>Date</th>
                    <th className='py-2 font-light'>Status</th>
                    <th className='py-2 font-light'>Amount</th>                    
                </tr>
            </thead>
            <tbody className='divide-y font-figtree text-xs'>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>January Subscription</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>January Subscription</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>January Subscription</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>January Subscription</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>January Subscription</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>January Subscription</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export const AdminPaymentsTable = () => {
    return(
        <div className='bg-white p-4 rounded-lg shadow-xl overflow-x-auto'>
        <table className='table-responsive w-full divide-y'>
            <thead className='font-manrope text-xs uppercase text-left'>
                <tr>
                    <th className='py-2 font-light'>Trans Id</th>
                    <th className='py-2 font-light'>Member Name</th>
                    <th className='py-2 font-light'>Purpose</th>
                    <th className='py-2 font-light'>Date</th>
                    <th className='py-2 font-light'>Status</th>
                    <th className='py-2 font-light'>Amount</th>                    
                </tr>
            </thead>
            <tbody className='divide-y font-figtree text-xs'>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
                <tr className=''>
                    <td className='py-5 pr-4 whitespace-nowrap'>672373813813</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Dunkwu Alexander</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>Annual Subscription3</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>27th May, 2023</td>
                    <td className='py-5 pr-4 whitespace-nowrap'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Paid
                        </span>
                    </td>
                    <td className='py-5 pr-4 whitespace-nowrap text-xs text-gray-600'>N15,000.00</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default PaymentsTable
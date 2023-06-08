import React from 'react'

const EventsTable = () => {
  return (
    <div className='bg-white p-4 shadow-xl rounded-lg overflow-x-auto'>
        <table className='table-responsive w-full divide-y'>
            <thead className='font-manrope text-xs uppercase text-left'>
                <tr>
                    <th className='py-2 font-light'>S/N</th>
                    <th className='py-2 font-light'>Event</th>
                    <th className='py-2 font-light'>Date</th>
                    <th className='py-2 font-light'>Fee</th>
                    <th className='py-2 font-light'>Status</th>
                </tr>
            </thead>
            <tbody className='divide-y font-figtree text-xs'>
                <tr className=''>
                    <td className='py-5 whitespace-nowrap pr-4'>45165171</td>
                    <td className='py-5 whitespace-nowrap pr-4'>2023 AGM</td>
                    <td className='py-5 whitespace-nowrap pr-4'>27th May, 2023</td>
                    <td className='py-5 whitespace-nowrap pr-4'>Free</td>
                    <td className='py-5 whitespace-nowrap pr-4'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Registred
                        </span>
                    </td>
                </tr>
                <tr className=''>
                    <td className='py-5 whitespace-nowrap pr-4'>45165171</td>
                    <td className='py-5 whitespace-nowrap pr-4'>2023 AGM</td>
                    <td className='py-5 whitespace-nowrap pr-4'>27th May, 2023</td>
                    <td className='py-5 whitespace-nowrap pr-4'>Free</td>
                    <td className='py-5 whitespace-nowrap pr-4'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Registred
                        </span>
                    </td>
                </tr>
                <tr className=''>
                    <td className='py-5 whitespace-nowrap pr-4'>45165171</td>
                    <td className='py-5 whitespace-nowrap pr-4'>2023 AGM</td>
                    <td className='py-5 whitespace-nowrap pr-4'>27th May, 2023</td>
                    <td className='py-5 whitespace-nowrap pr-4'>Free</td>
                    <td className='py-5 whitespace-nowrap pr-4'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Registred
                        </span>
                    </td>
                </tr>
                <tr className=''>
                    <td className='py-5 whitespace-nowrap pr-4'>45165171</td>
                    <td className='py-5 whitespace-nowrap pr-4'>2023 AGM</td>
                    <td className='py-5 whitespace-nowrap pr-4'>27th May, 2023</td>
                    <td className='py-5 whitespace-nowrap pr-4'>Free</td>
                    <td className='py-5 whitespace-nowrap pr-4'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Registred
                        </span>
                    </td>
                </tr>
                <tr className=''>
                    <td className='py-5 whitespace-nowrap pr-4'>45165171</td>
                    <td className='py-5 whitespace-nowrap pr-4'>2023 AGM</td>
                    <td className='py-5 whitespace-nowrap pr-4'>27th May, 2023</td>
                    <td className='py-5 whitespace-nowrap pr-4'>Free</td>
                    <td className='py-5 whitespace-nowrap pr-4'>
                        <span className='bg-green-300 text-green-800 px-5 py-0.5 text-xs rounded-lg'>
                            Registred
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EventsTable
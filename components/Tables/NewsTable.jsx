import React from 'react'

const NewsTable = () => {
  return (
    <div className='bg-white p-4 space-y-5 rounded-lg shadow-xl'>
        <p className='font-manrope'>Job Postings</p>

        <div className='relative overflow-x-auto'>
            <table className='w-full divide-y'>
                <thead className='font-manrope text-xs  text-left'>
                    <tr>
                        <th className='py-2 font-light'>Job Title</th>
                        <th className='py-2 font-light'>Company</th>
                        <th className='py-2 font-light'>Application Link</th>
                        <th className='py-2 font-light'>Date</th>                        
                    </tr>
                </thead>
                <tbody className='divide-y font-figtree text-sm'>
                    <tr className=''>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'>26th May, 2023</td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'>26th May, 2023</td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'>26th May, 2023</td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'>26th May, 2023</td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'>26th May, 2023</td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4'>Lorem Ipsum</td>
                        <td className='py-3 whitespace-nowrap pr-4 text-xs text-gray-600'>26th May, 2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default NewsTable
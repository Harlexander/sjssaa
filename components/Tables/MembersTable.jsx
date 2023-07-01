import moment from 'moment'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const MembersTable = ({admin, data, isLoading}) => {
  return (
    <div className='bg-white p-4 shadow-xl rounded-lg overflow-x-auto'>
    <table className='table-responsive w-full divide-y'>
        <thead className='font-manrope text-xs uppercase text-left'>
            <tr>
                <th className='py-2 whitespace-nowrap pr-4 font-light'>Member Id</th>
                <th className='py-2 whitespace-nowrap pr-4 font-light'>Full Name</th>
                <th className='py-2 whitespace-nowrap pr-4 font-light'>Email</th>
                <th className='py-2 whitespace-nowrap pr-4 font-light'>Set</th>
                <th className='py-2 whitespace-nowrap pr-4 font-light'>Reg. Date</th>
                <th className='py-2 whitespace-nowrap pr-4 font-light'>State</th>
                {
                    admin && (
                        <>
                        <th className='py-2 whitespace-nowrap pr-4 font-light'></th>
                        <th className='py-2 whitespace-nowrap pr-4 font-light'></th>
                        </>
                    )
                }
            </tr>
        </thead>
        <tbody className='divide-y font-figtree text-xs'>
            {
                data.map((item, index) => (
                    <tr className='' key={index}>
                        <td className='py-4 whitespace-nowrap pr-4'>{item.member_id}</td>
                        <td className='py-4 whitespace-nowrap pr-4'>{item.firstName} {item.lastName}</td>
                        <td className='py-4 whitespace-nowrap pr-4'>{item.email}</td>
                        <td className='py-4 whitespace-nowrap pr-4'>{item.set}</td>
                        <td className='py-4 whitespace-nowrap pr-4'>{moment(item.created_at).format(" Do MMMM, YYY")}</td>
                        <td className='py-4 whitespace-nowrap pr-4'>{item.city}</td>
                        {
                            admin && (
                                <>
                                    <td className='py-4 whitespace-nowrap pr-4'>
                                        <button className='px-3 bg-blue-500 py-1 whitespace-nowrap pr-4 rounded text-white'>Edit</button>
                                    </td>
                                    <td className='py-4 whitespace-nowrap pr-4'>
                                        <button className='px-3 bg-red-500 py-1 whitespace-nowrap pr-4 rounded text-white'>Delete</button>
                                    </td>                     
                                </>
                            )
                        }
                    </tr>
                ))
            }
            {
                isLoading && (
                    Array(5).fill("").map((item, index) => (
                        <tr className='' key={index}>
                            <td className='py-4 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-4 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-4 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-4 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-4 whitespace-nowrap pr-4'><Skeleton/></td>
                            <td className='py-4 whitespace-nowrap pr-4'><Skeleton/></td>
                            {
                                admin && (
                                    <>
                                        <td className='py-4 whitespace-nowrap pr-4'>
                                            <button className='px-3 bg-blue-500 py-1 whitespace-nowrap pr-4 rounded text-white'>Edit</button>
                                        </td>
                                        <td className='py-4 whitespace-nowrap pr-4'>
                                            <button className='px-3 bg-red-500 py-1 whitespace-nowrap pr-4 rounded text-white'>Delete</button>
                                        </td>                     
                                    </>
                                )
                            }
                        </tr>
                    ))
                )
            }
        </tbody>
    </table>
</div>
  )
}

export default MembersTable
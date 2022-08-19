import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy'
import { useStateContext } from '../contexts/ContextPro'

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:to-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Earning</p>
              <p className='text-2xl'>$56,334</p>
            </div>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md" />
          </div>
        </div>
        <div className="flex flex-wrap items-center m-3 gap-14 justify-center">
          {earningData.map((item) => (
            <div key={item.title} classname="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className="text-lg font-semibold  dark:text-gray-200 dark:bg-secondary-dark-bg">{item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-20 flex-wrap justify-center'>
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">
              Revenue Updated
            </p>
            <div className="flex items-center gap-4">
              <p className='flex items-center gap-2 to-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 to-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex-wrap flex gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className='text-3x1 font-semibold'>$94,332</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-4 text-xs'>24%</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3x1 font-semibold'>$44,332</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>
              <div className="mt-5">
              </div>
              <div className="mt-10">
                <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Ecommerce
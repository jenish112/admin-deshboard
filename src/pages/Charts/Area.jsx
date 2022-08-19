import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, DateTime, Inject, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextPro'
const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage" />
      <div className=" w-full">
        <ChartComponent id='area-chart' height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { Width: 0 } }} tooltip={{ enable: true }} background={currentMode == 'Dark' ? '#33373E' : '#fff'}>
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index}{...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Area

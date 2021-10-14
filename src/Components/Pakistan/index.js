import React,{useEffect,useState} from 'react'
import Cards2 from '../Card2'
import GroupedChart2 from '../Chart2'
export default function Pakistan() {
    const [pakistanReport,setPakistanReport] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetchData()
        async function fetchData(){
            var report = await fetch('https://covid-19.dataflowkit.com/v1',{
                method:'GET'
            })
            var fetchedReport = await report.json()
            setPakistanReport(fetchedReport)
            setLoading(false)
        }
    }, [])
    console.log(pakistanReport)
    return (
        <div className='ph'>
            <h1>Global Condition Of The Pakistan</h1>
            <Cards2 report={pakistanReport} loading={loading} />
            <GroupedChart2 report={pakistanReport} loading={loading}  />
        </div>
    )
}

import React,{useState,useEffect} from 'react'
import Cards from '../Cards'
import GroupedBar from '../Chart';
export default function World() {
  const [worldReport,setWorldReport] = useState([])
    const [loading,setLoading] = useState(true);
   useEffect(() => {
        fetchData()
       async function fetchData(){
           var report = await fetch('https://covid-19.dataflowkit.com/v1',{
               method: 'GET'
           })
           var fetchedReport = await report.json();
           setWorldReport(fetchedReport)
           
           setLoading(false);
       }  
    }, [])

    return (
        <div className='wrh'>
            <h1>Global Condition Of The World</h1>
            <Cards loading={loading} report={worldReport} />
            <GroupedBar report={worldReport} loading={loading}/>
        </div>
    )
}

// import firebase from "../firebase"
import { useState, useEffect} from 'react'


function ShortMainHistoryText() {
const [isLoading, setIsLoading] = useState(true)
const [dashboardData, setDashboardData] = useState(null)


useEffect(()=> {
  async function fetchDashboardData(){
  //   await firebase
  //       .database()
  //       .ref("History")
  //       .once("value", (snapshot) => {
  //           details = snapshot.val()}, 
  //           setDashboardData(details)
  //           setIsLoading(false)
  // }
  const response = await fetch('https://initialise-6d68a-default-rtdb.europe-west1.firebasedatabase.app/History.json')
  const data = await response.json()
              setDashboardData(data)
              setIsLoading(false)
  }
  fetchDashboardData()
},[])

if (isLoading) {
  return <h2>Φορτώνει</h2>
}

return (
  <>{dashboardData.mainInformation}</>
)
}
export default ShortMainHistoryText

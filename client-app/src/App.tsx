import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'

function App() {

  const [activities,setActivities] = useState([])

  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products/')
    .then(response => {
      setActivities(response.data)
    })
  }) //It returns function and accepts params
  return (
    <>
    <div>
      <Header as="h2" icon='users' content='Reactivities' />
      <List>
        {activities.map((activity:any)=>(
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    

    </div>
    </>
  )
}

export default App

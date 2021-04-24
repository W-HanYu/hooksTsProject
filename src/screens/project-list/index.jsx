import { useEffect, useState } from "react"
import { SerachPanel } from './search-panel'
import { List } from './list'
import qs from 'qs'
import { cleanObject } from 'utils/utils'
const api = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  
  useEffect(() => {
    fetch(`${api}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  useEffect(() => {
    fetch(`${api}/users`).then(async response => {
      console.log('response', response)
      if (response.ok) {
        setUsers(await response.json())
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>
    <SerachPanel users={users} param={param} setParam={setParam}></SerachPanel>
    <List users={users} list={list}></List>
  </div>
}
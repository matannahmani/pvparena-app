import {useEffect,useState} from 'react';
import axios from "axios";
import { Check, X } from '@geist-ui/react-icons'


export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3000/pages/islogged').then(response => {
      if (response.data.code === 200){
        setUser(response.data.user.email);
      }else{
        setUser(null);
      }
    })
  })
  return (
    <div>
      {(user !== null) ? <Check color="white"/> : <X color="white"/> }
    </div>
  )
};
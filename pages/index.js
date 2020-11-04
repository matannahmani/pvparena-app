import React, {useEffect} from 'react';
import { Check, X } from '@geist-ui/react-icons';
import {UserContext} from "../components/contextprovider";

export default function Home() {
  const [user] = React.useContext(UserContext);
  return (
    <div>
      {(user === true) ? <Check color="white"/> : <X color="white"/> }
    </div>
  )
};
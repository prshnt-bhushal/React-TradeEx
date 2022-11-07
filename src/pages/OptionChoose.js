import React, {useEffect ,useState} from 'react'
import OptionLayout from '../component/OptionLayout'
import Sidebar from '../component/SideBar'
import { db } from '../FirebaseConfig'
import { auth } from '../FirebaseConfig'
import { where } from 'firebase/firestore'
import { collection,onSnapshot,query } from 'firebase/firestore'
import { useLocation } from 'react-router-dom'

import './OptionChoose.css'

function OptionChoose(props) {
    // console.log(props.location.state);

    const user_name =auth.currentUser.displayName;
  const [posts,setPost] = useState([]);
  const [currrentUserID, setCurrentUserID] = useState(null);

  useEffect(()=>{
    const postRef  = collection(db,'posts');
    const q = query(postRef, where("postedUser", "==", user_name));
    onSnapshot(q,(snapshot)=>{
      const pos= snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }))
      setPost(pos);
      console.log(posts);
    })
   },[])



  const renderFunction = (postttt)=>{

     return <OptionLayout posttt= {postttt}/>
  }
  return (
    <div>
      <Sidebar/>
      <div className='optionChooseContainer'>
      <div className='optionChoose'>
      {posts.map(renderFunction)}
      </div>
      </div>
    </div>
  )
}

export default OptionChoose
// import './UserCollection.scss';
// import { Button } from 'react-bootstrap';
// import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import Profile from '../../components/Profile/Profile'
// import Record from '../../components/Record/Record'


// const UserCollection = () => {
  
//   const location = useLocation()
//   const profile = location.state.profile
  
//   return (
//     <main>
//       <div className='user-collection container'>
//         <div className='row'>
//           <div className='col-md-12'>
//             <div className='results-header text-center'>
//               <h1>Record Collection</h1>
//               <div>
//                 <Profile key={profile.name} />
//                 <h2>{profile.name}</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='row'>
//           {profile?.records?.map(record =>
//           <>
//           <Record handleRemoveRecord={handleRemoveRecord} handleAddRecord=
//           {handleAddRecord} profile={profile} key={record.id} id={record._id} record={record}/>
            
//           <Button onClick={() => handleRemoveRecord(profile._id, record._id)} profile={profile} variant="outline-success">Remove</Button>          
//           </>
//           )}
//         </div>
//       </div> 
//     </main>
//   ); 
// }

// export default UserCollection;

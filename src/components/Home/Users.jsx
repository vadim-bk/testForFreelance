// import React from "react";
// import { useHistory } from "react-router-dom";

// import AlertRemove from "./AlertRemove";
// import editIcon from "../assets/create-black-18dp.svg";

// export const Users = ({ users, loading }) => {
//   const history = useHistory();

//   // if (loading) {
//   //   return <Spinner animation="border" />;
//   // }

//   return (
//     <div className="users-wrapper">
//       {users.map((user) => (
//         <Card key={user.id} className="users-wrapper__list" data-type={user.id}>
//           <Card.Body>
//             <Card.Title>
//               <span className="users-wrapper__list-name">{user.name}</span>
//               <span>{user.surname}</span>
//             </Card.Title>
//             <Card.Text>{user.desc}</Card.Text>
//           </Card.Body>
//           <span className="users-wrapper__list-btn">
//             <img
//               onClick={() => history.push(`/user/${user.id}`)}
//               src={editIcon}
//               alt="edit"
//             />
//             <AlertRemove />
//           </span>
//         </Card>
//       ))}
//     </div>
//   );
// };

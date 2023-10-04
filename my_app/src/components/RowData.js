// import React, { Component } from 'react';

// class HobbySelector extends Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedYear: '2023',
//       data: {
//         "2023": [
//           {
//             "name": "John Doe",
//             "fees": 1000,
//             "rollno": "2023001"
//           },
//           {
//             "name": "Jane Smith",
//             "fees": 1200,
//             "rollno": "2023002"
//           }
//         ],
//         "2022": [
//           {
//             "name": "Alice Johnson",
//             "fees": 950,
//             "rollno": "2022001"
//           },
//           {
//             "name": "Bob Williams",
//             "fees": 1100,
//             "rollno": "2022002"
//           }
//         ],
//         "2021": [
//           {
//             "name": "Eva Davis",
//             "fees": 900,
//             "rollno": "2021001"
//           },
//           {
//             "name": "Michael Brown",
//             "fees": 1050,
//             "rollno": "2021002"
//           }
//         ]
//       }
//       ,
//     };
//   }

//   handleYearChange = (event) => {
//     this.setState({ selectedYear: event.target.value });
//   };

//   render() {
//     const { selectedYear, data } = this.state;

//     return (
//       <div>
//         <h1>Student Data for Selected Year: {selectedYear}</h1>
//         <select value={selectedYear} onChange={this.handleYearChange}>
//           <option value="2023">2023</option>
//           <option value="2022">2022</option>
//           <option value="2021">2021</option>
//         </select>
//         <ul>
//           {data[selectedYear].map((student, index) => (
//             <li key={index}>
//               <strong>Name:</strong> {student.name}, <strong>Fees:</strong> {student.fees}, <strong>Roll No:</strong> {student.rollno}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default HobbySelector;

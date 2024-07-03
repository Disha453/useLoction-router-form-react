
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {


  const navigate = useNavigate()

  const [student, setStudent] = useState({ fname: "", password: "" })
  const [submit, setSubmit] = useState(JSON.parse(localStorage.getItem("fish")) || [])

  const hendelChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });



  }
  console.log(student)

  const hendelSubmit = () => {
    setSubmit([...submit, student]);
    localStorage.setItem("fish", JSON.stringify([...submit, student]))
    navigate("/Submit", { state: student }) 
     
  }
  console.log(submit)





  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "30px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor='fname'>Full Name:</label>
          <input type='text' id='fname' name='fname' value={student.fname} onChange={(e) => hendelChange(e)} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor='lname'>last Name:</label>
          <input type='text' id='lname' name='lname' value={student.lname} onChange={(e) => hendelChange(e)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' value={student.password} onChange={(e) => hendelChange(e)} />
        </div>
        <div>
          <button type='submit' onClick={hendelSubmit}>Submit</button>
        </div>
      </div>



    </>
  );
}

export default App;

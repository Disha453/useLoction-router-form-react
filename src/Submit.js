
import { useLocation } from "react-router-dom";

const Submit = () => {

    const location = useLocation();

    const student = location.state;
    return (

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "30px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor='fname'>Full Name:</label>
                <input type='text' id='fname' name='fname' value={student.fname}/>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={student.password} />
            </div>
            <div>

            </div>
        </div>

    )
}
export default Submit;
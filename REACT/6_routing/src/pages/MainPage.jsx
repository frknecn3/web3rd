import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const MainPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios
            .get('http://localhost:3000/users')
            .then((res) => setUsers(res.data))
            .catch((err) => console.error(err))

    }, [])

    return (
        <div>
            {
                users.map((user) => (
                    <Link
                        to={`/user/${user.id}`}
                        className="user-link"
                    >
                        {user.username}
                    </Link>
                ))
            }
        </div>
    )
}

export default MainPage
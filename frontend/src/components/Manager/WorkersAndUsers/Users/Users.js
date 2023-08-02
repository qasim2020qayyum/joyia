import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [uData, setUData] = useState([]);

    const userData = async () => {
        let res = await fetch("http://localhost:8000/joiya/user")
        res = await res.json();
        setUData(res)
    }
    console.log(uData)

    useEffect(() => {
        userData()
    }, [])

    const deleteUser = async (id) => {

        let res = await fetch("http://localhost:8000/joiya/user/" + id, {
            method: "delete"
        })
        res = await res.json()
        if (res) {
            userData()
        }

    }

    const [inputValue, setInputValue] = useState("");
    const filteredUsers = uData.filter((u) =>
        u.phone.toLowerCase().includes(inputValue.toLowerCase())
    );
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <form style={{ margin: "2rem 2rem ", fontWeight: "900" }}>
                <input
                    style={{ fontWeight: "500", }}
                    type="text"
                    className="form-control w-25 mb-3 rounded-pill search_fieldd"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Search Worker by number..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
            <h1 className='display-0 fw-bold my-4 text-danger'>USERS</h1>
            <hr />
            <table class="table table-hover w-75 mx-auto text-center">
                <thead>
                    <tr className='bg-danger'>
                        <th scope="col">E-mail</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers.map((user, ind) => {
                            return (
                                <>
                                    <tr key={user._id}>
                                        <th scope="row">{user.email}</th>
                                        <td>{user.phone}</td>
                                        <td>{user.name}</td>
                                        <td>
                                            <a onClick={() => deleteUser(user._id)} className='btn btn-danger btn-sm'><i class="fa fa-trash" aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>



        </div>
    )
}

export default Users

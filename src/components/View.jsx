import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {

    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response) => {
                changeData(response.data)
            }
        )
        .catch().finally()
    }
useEffect(()=>{fetchData()},[])


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friend Name</th>
                                    <th scope="col">Friend's Nick Name</th>
                                    <th scope="col">Describe your Friend</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map(

                                    (value, i) => {

                                        return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>


                                    }

                                )}


                            </tbody>
                        </table>



                    </div>
                </div>
            </div>


        </div>
    )
}

export default View
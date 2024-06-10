import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {

    const [data, changeData] = useState(
        [{ "_id": "666694bf2a16f0afd5e07bba", "name": "nithya", "friendName": "kj", "friendNickName": "lhp", "DescribeYourFriend": "kihh;[j", "__v": 0 }, { "_id": "66669c882a16f0afd5e07c3d", "name": "nithya", "friendName": "kj", "friendNickName": "lhp", "DescribeYourFriend": "kihh;[j", "__v": 0 }, { "_id": "66669d5e2a16f0afd5e07c6d", "name": "Dhiya", "friendName": "Monica", "friendNickName": "Moni", "DescribeYourFriend": "Sweet Girl", "__v": 0 }, { "_id": "66669df72a16f0afd5e07ca2", "name": "", "friendName": "j", "friendNickName": "i", "DescribeYourFriend": "gjhku", "__v": 0 }, { "_id": "66669e292a16f0afd5e07cae", "name": "Chandana", "friendName": "Ashtami", "friendNickName": "c", "DescribeYourFriend": "ajsighcb", "__v": 0 }, { "_id": "66669e2b2a16f0afd5e07cb0", "name": "swathi", "friendName": "j", "friendNickName": "i", "DescribeYourFriend": "gjhku", "__v": 0 }, { "_id": "66669e322a16f0afd5e07cb5", "name": "Chandana", "friendName": "Ashtami", "friendNickName": "c", "DescribeYourFriend": "ajsighcb", "__v": 0 }, { "_id": "66669e402a16f0afd5e07cb8", "name": "ANJALI M S", "friendName": "Ananya", "friendNickName": "Anu", "DescribeYourFriend": "Smart", "__v": 0 }, { "_id": "66669ea42a16f0afd5e07cdd", "name": "Enat Mathews", "friendName": "Athira", "friendNickName": "Aathi", "DescribeYourFriend": "Awesome", "__v": 0 }, { "_id": "66669eb12a16f0afd5e07ce3", "name": "Chandana", "friendName": "Ashtami", "friendNickName": "c", "DescribeYourFriend": "ytfv", "__v": 0 }, { "_id": "66669eb12a16f0afd5e07ce6", "name": "sreya", "friendName": "abc", "friendNickName": "pqr", "DescribeYourFriend": "kind", "__v": 0 }, { "_id": "66669ec02a16f0afd5e07cf2", "name": "FEBIN", "friendName": "BRISTOW", "friendNickName": "BRIS", "DescribeYourFriend": "Georgeeeee Bristowwwww", "__v": 0 }, { "_id": "66669eee2a16f0afd5e07d41", "__v": 0 }, { "_id": "66669ef72a16f0afd5e07d62", "name": "Chandana", "friendName": "Ashtami", "friendNickName": "c", "DescribeYourFriend": "sdf", "__v": 0 }, { "_id": "66669f402a16f0afd5e0805d", "__v": 0 }, { "_id": "66669f5e2a16f0afd5e08337", "name": "Rizna", "friendName": "Sabeeha", "friendNickName": "Sabee", "DescribeYourFriend": "Nice", "__v": 0 }]
    )



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
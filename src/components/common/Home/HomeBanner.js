import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDistrict, getState } from '../../../Redux/home/Action'
const HomeBanner = ({ type }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.home.state)
    const district = useSelector(state => state.home.district)

    const [pinData, setpinData] = useState({ pincode: '', date: '', age: '' })
    const [districtData, setdistrictData] = useState({ district_id: '', date: '', age: '' })
    const [stateValue, setstateValue] = useState(null)

    var ageArray = Array.from({ length: 100 }, (v, k) => k + 1);

    // console.log(pinData)
    console.log(districtData)

    useEffect(() => {
        const abortController = new AbortController();

        type === 'district' && dispatch(getState())
        return () => {
            abortController.abort();
        }
    }, [dispatch, type])

    useEffect(() => {
        stateValue && dispatch(getDistrict({ state_id: stateValue }))
    }, [stateValue])

    return (
        <section className={`banner-section islogin`}>
            {/* <picture className="banner-img">
                <source media="(min-width:991px)" srcSet={'/images/banner-image.jpg'}></source>
                <img src='/images/banner-image.jpg' alt="Banner Images" />
            </picture> */}
            <div className="container">
                <div className="form-group text-center">
                    <div className="my-2">
                        <label htmlFor="sel1">Age</label>
                        <select onChange={e => { type === 'pin' ? setpinData({ ...pinData, age: e.target.value }) : setdistrictData({ ...districtData, age: e.target.value }) }} className="form-control">
                            <option value="">Select State</option>
                            {ageArray.map((val, i) => {
                                return <option key={i} value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                    </div>
                    {type === 'district' && <>
                        < div className="my-2">
                            <label htmlFor="sel1">Select State</label>
                            <select onChange={e => { setstateValue(e.target.value) }} className="form-control">
                                <option value="">Select State</option>
                                {state.length > 0 && state.map((val, i) => {
                                    return <option key={i} value={val.state_id}>{val.state_name}</option>
                                })}
                            </select>
                        </div>
                        <div className="my-2">
                            <label htmlFor="sel1">Select District</label>
                            <select onChange={e => { setdistrictData({ ...districtData, district_id: e.target.value }) }} className="form-control">
                                <option value="">Select District</option>
                                {district.length > 0 && district.map((val, i) => {
                                    return <option key={i} value={val.district_id}>{val.district_name}</option>
                                })}
                            </select>
                        </div>
                        <div className="my-2">
                            <label htmlFor="sel1">Select Date </label>
                            <input type="date" onChange={e => { setdistrictData({ ...districtData, date: e.target.value }) }} className="form-control" />
                        </div></>}


                    {type === 'pin' && <>< div className="my-2">
                        <label htmlFor="sel1">Enter Pin</label>
                        <input type="text" onChange={e => { setpinData({ ...pinData, pin: e.target.value }) }} className="form-control" />
                    </div>
                        <div className="my-2">
                            <label htmlFor="sel1">Select Date </label>
                            <input type="date" onChange={e => { setpinData({ ...pinData, date: e.target.value }) }} className="form-control" />
                        </div></>}
                    <div className="mt-3 mb-4">
                        <button className="btn btn-outline-dark">Search</button>
                    </div>
                </div>

                <table className="table table-hover table-bordered text-center table-responsive-sm table-responsive my-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>

                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>

                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thorntoasdasdbakdhbkajbkn</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td><span className="badge badge-primary">Primary</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section >
    )
}
export default HomeBanner
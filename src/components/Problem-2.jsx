import React, { useEffect, useState } from 'react';

const Problem2 = () => {

    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => {
                setData(data.results);
                isLoading(false)
            })
    }, []);

    console.log(data);

    if(loading){
        return <div className='flex'>
            <p>Loading.....</p>
        </div>
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <h4 className='text-center text-uppercase mb-5'>I haven't worked with Sass. If you give me some time I will be able to find out and complete the task.</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

                <div className="tab-content"></div>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Contact</th>
                            <th scope="col">Country</th>
                        </tr>

                        {
                            data?.map((item) =>
                                <tr key={item.id}>
                                    <td>
                                        {item.phone}
                                    </td>
                                    <td>
                                        {item.country.name}
                                    </td>
                                </tr>)
                        }

                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Problem2;
import React, { useState } from 'react'
import FooterComponent from '../common/FooterComponent'
import HeaderComponent from '../common/HeaderComponent'
import axios from 'axios';


function PostForm() {


    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState(1);
    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {

        e.preventDefault();

        setLoading(true);

        const postData = {
            title: title,
            body: body,
            userId: userId
        };



        axios.post(`${process.env.REACT_APP_API_URL}/posts`, postData).then(response => {

            setLoading(false);
            console.log(response.data);

        }).catch(error => {
            setLoading(false);
            console.log(error);
        });

    }


    return (

        <>


            <HeaderComponent className="content-body" />

            <h1>Create Post</h1>

            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Body</label>
                                <textarea className="form-control" name="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">Save</button>
                            </div>


                            {
                                loading && <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            }




                        </form>
                    </div>
                </div>

            </div>




            <FooterComponent />

        </>


    )
}

export default PostForm

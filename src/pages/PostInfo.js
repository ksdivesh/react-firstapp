import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterComponent from '../common/FooterComponent'
import HeaderComponent from '../common/HeaderComponent'
import axios from 'axios';


function PostInfo() {

    const { id } = useParams();
    const [postId, setPostId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        getPostInfo(id);

    }, [id]);

    const getPostInfo = (id) => {

        setLoading(true);

        axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`).then(response => {

            setLoading(false);

            const { id, title, body } = response.data;
            setPostId(id);
            setTitle(title);
            setBody(body);

        }).catch(error => {

            setLoading(false);

            console.log(error);
        });

    }


    return (
        <>
            <HeaderComponent />

            {
                !loading && <div>
                    <h1>Post Details {postId}</h1>

                    <div>
                        <strong>Title:</strong> {title}
                    </div>

                    <div>
                        <strong>Body:</strong> {body}
                    </div>


                </div>

            }

            {
                loading && <div className="text-center mt-2">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }





        </>
    )
}

export default PostInfo

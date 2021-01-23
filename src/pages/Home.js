import React, { useEffect, useState } from 'react'
import FooterComponent from '../common/FooterComponent'
import HeaderComponent from '../common/HeaderComponent'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Home() {


    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPosts = () => {

        setLoading(true);

        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {

            setLoading(false);

            console.log(response.data);
            setPosts(response.data);

        }).catch(error => {

            setLoading(false);
            console.log(error);
        });



    }

    useEffect(() => {

        getPosts();

    }, []);


    const deletePost = (id) => {



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                setLoading(true);

                axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`).then(response => {

                    setLoading(false);

                    getPosts();
                    Swal.fire("Deleted", "Post deleted successfully.", "success");


                }).catch(error => {

                    setLoading(false);

                    Swal.fire("Server Error", error.message, "error");

                })

            }
        })






    }


    return (
        <>
            <HeaderComponent />

            {
                loading && <div className="spinner-border text-primary mt-2 ml-2" role="status">
                    <span className="sr-only"></span>
                </div>
            }

            <div className="content-body">

                {
                    !loading && posts.map((post, index) => (
                        <div className="card mt-4" key={index}>


                            <div className="card-header bg-primary text-light">
                                {index} {post.title}
                            </div>

                            <div className="card-body">
                                <Link to={`/posts/detail/${post.id}`}>View More</Link>
                                &nbsp;&nbsp;
                                <button className="btn btn-danger btn-sm" onClick={() => deletePost(post.id)}>Delete Post</button>

                            </div>

                        </div>
                    ))
                }




            </div>

            <FooterComponent />
        </>
    )
}

export default Home

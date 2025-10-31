"use client";

import { useEffect, use} from "react";
import {useRouter} from 'next/navigation';

export default function EditBlogPage({ params }) {

    const routeParams = use(params);
    const id = routeParams.postid;
    const router = useRouter();
    console.log("Editing post with id:", id);

    useEffect(() =>{
        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`https://palugada.me/api/products/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                // Populate form fields with result data
                document.getElementById('name').value = result['data'][0].name;
                document.getElementById('description').value = result['data'][0].description;
            } catch (err) {
                console.error('Failed to fetch blog post:', err);
            }
        }
        fetchBlogPost();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        try {
            const response = await fetch(`https://palugada.me/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, description }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if(response.status === 200){
                console.log('Blog post updated successfully');
                router.push('/blog/read');
            }
            // Optionally redirect or show success message
        } catch (err) {
            console.error('Failed to update blog post:', err);
        }
    }


    return (
        <div className="w-full max-w-lg">
            <h1>Edit Blog Post {id}</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <label htmlFor="name">Name:</label>
                    <input className="border border-gray-300 p-2 rounded" type="text" id="name" name="name" required />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <label htmlFor="description">Description:</label>
                    <textarea className="border border-gray-300 p-2 rounded" id="description" name="description" rows="3" required></textarea>
                </div>
                <button 
                
                type="submit"
                className="ext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >Update</button>
            </form>
        </div>
    );  
}
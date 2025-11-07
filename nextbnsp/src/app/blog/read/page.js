"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";


export default function ReadBlogPage() {
    const [data, setData]       = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://palugada.me/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log();
                setData(result['data']);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        console.log(`Delete item with id: ${id}`);
        // Implement delete functionality here
        try{
            const response = await fetch(`https://palugada.me/api/products/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else{
                console.log('Blog post deleted successfully');
                location.reload();
                // Optionally refresh the data or remove the item from state
            }
        }
        catch(err){}
    }

    return (
        <div>
        <h1>Read Blog Posts</h1>
        <p>Welcome to the blog! Here you can read various blog posts.</p>
            <Link 
                href="/blog/create"
                className="content-stretch mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Create New Blog Post
            </Link>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className='flex justifiy-center ml-20'>   
                <table className='table-auto table-fixed border-collapse border border-slate-400 mt-10'>
                    <thead>
                        <tr>
                            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200'>ID</th>
                            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200'>Name</th>
                            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200'>Description</th>
                            <th className='border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200'>Action</th>
                        </tr>
                    </thead>
                    {data && (
                        <tbody>
                            {data.map((item) => (
                            <tr key={item.id}>
                                <td className='border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400'>{item.id}</td>
                                <td className='border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400'>{item.name}</td>
                                <td className='border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400'>{item.description}</td>
                                <td className='border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400'>
                                    <Link href={`/blog/edit/${item.id}`}>Edit</Link> &nbsp;
                                    <button onClick={() => handleDelete(item.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );  
}
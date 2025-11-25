"use client";

import {redirect, useRouter} from 'next/navigation';
import React, {useState} from 'react';
import SideBar from "@/components/SideBar";
import NavigationBar from "@/components/NavigationBar";

export default function CreateBlogPage() {

  const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [user_id, setUsers] = useState(1);

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const response = await fetch('https://palugada.me/api/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, content, user_id}),
            });
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else{
                router.push('/blog/read');
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div className="container mx-auto flex-2">
            <div className="grid grid-cols-[25%_75%] ">
                <div><SideBar /></div>
                <div>
                    <NavigationBar />
                    <h1>Welcome to Next.js!</h1>
                    <p className="text-line-600 text-4xl font-bold">Form Tambah Post</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
                                id="inline-full-name"
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-wrap gap-4 mt-4">
                          <textarea
                              value={content}
                              onChange={(e) => setContent(e.target.value)}
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
                              rows="4"
                              placeholder="Enter your message here..."
                          ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" onSubmit={handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
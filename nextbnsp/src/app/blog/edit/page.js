"use client";

import { redirect } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';

export default function EditBlogPage({ params})  {

    const id = params.id

    useEffect(() => {
        // Fetch existing blog post data here using an ID from params or similar
        // Populate form fields with fetched data
        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`https://palugada.me/api/products/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                // Populate form fields with result data
                document.getElementById('title').value = result.title;
                document.getElementById('content').value = result.content;
            } catch (err) {
                console.error('Failed to fetch blog post:', err);
            }
        }
        fetchBlogPost();
    }, []);

    return (
        <div>
        <h1>Edit Blog Post</h1>
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" rows="10" required></textarea>
            </div>
            <button type="submit">Update</button>
        </form>
        </div>
    );
}
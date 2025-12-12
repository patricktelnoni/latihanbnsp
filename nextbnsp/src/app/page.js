'use client';
import {useEffect, useState} from 'react';
import Header from'@/components/common/Header';
import SearchView from'@/components/ui/SearchView';
import Button from'@/components/ui/Button';
import Image from'next/image';
import Kelingking from '../../public/kelingking.png';
import Ayam from '../../public/ayam.png';
import Avatar from '../../public/avatar.png';
import Judul from '../../public/header.png';

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(true)
    const [posts, setPosts]       = useState(null)

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSearch = (searchValue) => {
        // Handle search functionality
        console.log('Searching for:', searchValue)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://palugada.me/api/posts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                setPosts(result['data']);
                console.log(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <main className="w-full bg-background-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[58px]">
                <div className="flex flex-col justify-start items-center w-full">

                    {/* Header Section */}
                    <div className="flex flex-col justify-start items-center w-full max-w-[74%] sm:max-w-[85%] md:max-w-[90%] lg:max-w-[74%]">
                        <Header />

                        {/* Hero Content Section */}
                        <section className="flex flex-col justify-start items-center w-full mt-[48px] md:mt-[72px] lg:mt-[96px]">

                            {/* Main Title */}
                            <h1
                                className="w-auto text-center text-[24px] sm:text-[32px] md:text-[38px] lg:text-[48px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[61px]"
                                style={{
                                    fontFamily: 'Merriweather',
                                    fontWeight: '900',
                                    color: '#000538'
                                }}
                            >
                                The Food Ninja Blog
                            </h1>

                            {/* Subtitle */}
                            <p
                                className="w-auto text-center mt-4 sm:mt-6 lg:mt-8 text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[22px] lg:leading-[24px]"
                                style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    color: '#605c59'
                                }}
                            >
                                A blog about food, experiences, and recipes.
                            </p>

                            {/* Search Section */}
                            <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[38%] mt-[26px] sm:mt-[39px] lg:mt-[52px]">
                                <SearchView
                                    placeholder="Search for articles"
                                    text_font_size="18px"
                                    text_font_family="Merriweather"
                                    text_font_weight="400"
                                    text_line_height="23px"
                                    text_color="#5e5e5e"
                                    fill_background_color="#fdfdfd"
                                    border_border="1px solid #dddddd"
                                    border_border_radius="5px"
                                    padding="16px 46px 16px 28px"
                                    layout_gap="16px"
                                    layout_width="100%"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    onSearch={handleSearch}
                                />
                            </div>

                            {/* Featured Articles Section */}
                            <div className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">
                                <div className="grid grid-cols-2 lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 w-full">

                                    {/* Left Article */}
                                    {posts && posts.map((post) => (
                                        <article key={[post.id]} className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] justify-start items-center w-full lg:w-[46%]">
                                            <div className="w-full">
                                                <Image
                                                    src={Kelingking}
                                                    alt="Greece travel landscape with beautiful coastline"
                                                    width={510}
                                                    height={278}
                                                    className="w-full h-auto rounded-[5px] object-cover"
                                                    priority
                                                />

                                            </div>

                                            <div className="flex flex-col justify-start items-start w-full gap-2">
                                                <Button
                                                    text="Travel"
                                                    text_font_size="14px"
                                                    text_font_family="Roboto"
                                                    text_font_weight="500"
                                                    text_line_height="17px"
                                                    text_color="#ffffffd8"
                                                    fill_background_color="#283a61"
                                                    border_border_radius="3px"
                                                    padding="2px 16px 2px 16px"
                                                    layout_width="auto"
                                                />

                                                <h2
                                                    className="w-full mt-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[33px]"
                                                    style={{
                                                        fontFamily: 'Merriweather',
                                                        fontWeight: '700',
                                                        color: '#000000',
                                                        textAlign: 'left'
                                                    }}
                                                >
                                                    {post.title}
                                                </h2>

                                                <p
                                                    className="w-auto text-[14px] leading-[18px] mt-2"
                                                    style={{
                                                        fontFamily: 'Merriweather',
                                                        fontWeight: '400',
                                                        color: '#505050',
                                                        textAlign: 'left'
                                                    }}
                                                >
                                                    {post.created_at.split("T")[0].split("-").reverse().join("-")}
                                                </p>

                                                <p
                                                    className="w-full lg:w-[100%] text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[25px]"
                                                    style={{
                                                        fontFamily: 'Roboto',
                                                        fontWeight: '400',
                                                        color: '#424242',
                                                        textAlign: 'left'
                                                    }}
                                                >
                                                    {post.content}
                                                </p>
                                            </div>
                                        </article>

                                    ))}

                                    {/* Right Article */}

                                </div>
                            </div>

                            {/* Article Descriptions Section */}
                            <div className="w-full mt-[10px] flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">



                            </div>

                            {/* Author Information Section */}
                            <div className="w-full mt-4 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
                                <div className="flex flex-row justify-start items-center w-auto">
                                    <Image
                                        src={Avatar}
                                        alt="George Costanza profile photo"
                                        width={42}
                                        height={42}
                                        className="w-[42px] h-[42px] rounded-[20px] object-cover"
                                    />
                                    <p
                                        className="ml-[14px] text-[14px] leading-[22px]"
                                        style={{
                                            fontFamily: 'Merriweather',
                                            fontWeight: '700',
                                            color: '#000000',
                                            textAlign: 'left'
                                        }}
                                    >
                                        George Costanza
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center w-auto lg:flex-1 lg:px-[104px] sm:px-[52px]">
                                    <Image
                                        src={Avatar}
                                        alt="George Costanza profile photo"
                                        width={42}
                                        height={42}
                                        className="w-[42px] h-[42px] rounded-[20px] object-cover"
                                    />
                                    <p
                                        className="ml-[14px] text-[14px] leading-[22px]"
                                        style={{
                                            fontFamily: 'Merriweather',
                                            fontWeight: '700',
                                            color: '#000000',
                                            textAlign: 'left'
                                        }}
                                    >
                                        George Costanza
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}
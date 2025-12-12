'use client';

import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchViewClasses = cva(
    'inline-flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500',
    {
        variants: {
            variant: {
                default: 'border',
                filled: 'shadow-sm',
                outline: 'border-2',
            },
            size: {
                small: 'text-sm',
                medium: 'text-base',
                large: 'text-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
        },
    }
);

const SearchView = ({
                        // Required parameters with defaults
                        placeholder = "Search for articles",
                        text_font_size = "text-md",
                        text_font_family = "Merriweather",
                        text_font_weight = "font-normal",
                        text_line_height = "leading-lg",
                        text_text_align = "left",
                        text_color = "text-search-text",
                        fill_background_color = "bg-search-background",
                        border_border = "1px solid #dddddd",
                        border_border_radius = "rounded-sm",

                        // Optional parameters (no defaults)
                        layout_gap,
                        layout_width,
                        padding,
                        margin,
                        position,

                        // Standard React props
                        variant,
                        size,
                        value,
                        onChange,
                        onSearch,
                        className,
                        disabled = false,
                        ...props
                    }) => {
    const [searchValue, setSearchValue] = useState(value || '');

    // Safe validation for optional parameters
    const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
    const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
    const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
    const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
    const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

    // Build optional Tailwind classes
    const optionalClasses = [
        hasValidGap ? `gap-[${layout_gap}]` : '',
        hasValidWidth ? `w-[${layout_width}]` : 'w-full',
        hasValidPadding ? `p-[${padding}]` : 'px-4 py-2',
        hasValidMargin ? `m-[${margin}]` : '',
        hasValidPosition ? position : '',
    ]?.filter(Boolean)?.join(' ');

    // Build inline styles for required parameters
    const searchStyles = {
        fontSize: text_font_size === "text-md" ? "18px" : text_font_size,
        fontFamily: text_font_family || 'Merriweather',
        fontWeight: text_font_weight === "font-normal" ? "400" : text_font_weight,
        lineHeight: text_line_height === "leading-lg" ? "23px" : text_line_height,
        textAlign: text_text_align || 'left',
        color: text_color === "text-search-text" ? "#5e5e5e" : text_color,
        backgroundColor: fill_background_color === "bg-search-background" ? "#fdfdfd" : fill_background_color,
        border: border_border || "1px solid #dddddd",
        borderRadius: border_border_radius === "rounded-sm" ? "5px" : border_border_radius,
    };

    // Handle input change
    const handleInputChange = (event) => {
        const newValue = event?.target?.value;
        setSearchValue(newValue);

        if (typeof onChange === 'function') {
            onChange(event);
        }
    };

    // Handle search action
    const handleSearch = (event) => {
        if (event?.type === 'click' || (event?.type === 'keydown' && event?.key === 'Enter')) {
            if (typeof onSearch === 'function') {
                onSearch(searchValue, event);
            }
        }
    };

    // Handle key down for Enter key search
    const handleKeyDown = (event) => {
        if (event?.key === 'Enter') {
            handleSearch(event);
        }
    };

    return (
        <div
            className={twMerge(
                searchViewClasses({ variant, size }),
                optionalClasses,
                className
            )}
            style={searchStyles}
        >
            <input
                type="text"
                placeholder={placeholder}
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                className="flex-1 bg-transparent outline-none border-0 placeholder-gray-400"
                style={{
                    fontSize: searchStyles?.fontSize,
                    fontFamily: searchStyles?.fontFamily,
                    fontWeight: searchStyles?.fontWeight,
                    lineHeight: searchStyles?.lineHeight,
                    textAlign: searchStyles?.textAlign,
                    color: searchStyles?.color,
                }}
                {...props}
            />
            <button
                type="button"
                onClick={handleSearch}
                disabled={disabled}
                className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
            </button>
        </div>
    );
};

export default SearchView;
'use client';

import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
    {
        variants: {
            variant: {
                primary: 'focus:ring-blue-500',
                secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
                outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500',
            },
            size: {
                small: 'text-sm px-3 py-1.5',
                medium: 'text-base px-4 py-2',
                large: 'text-lg px-6 py-3',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'medium',
        },
    }
);

const Button = ({
                    // Required parameters with defaults
                    text = "Travel",
                    text_font_size = "text-xs",
                    text_font_family = "Roboto",
                    text_font_weight = "font-medium",
                    text_line_height = "leading-xs",
                    text_text_align = "left",
                    text_color = "text-button-text",
                    fill_background_color = "bg-button-background",
                    border_border_radius = "rounded-xs",

                    // Optional parameters (no defaults)
                    layout_width,
                    padding,
                    position,

                    // Standard React props
                    variant,
                    size,
                    disabled = false,
                    className,
                    children,
                    onClick,
                    type = "button",
                    ...props
                }) => {
    // Safe validation for optional parameters
    const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
    const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
    const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

    // Build optional Tailwind classes
    const optionalClasses = [
        hasValidWidth ? `w-[${layout_width}]` : '',
        hasValidPadding ? `p-[${padding}]` : '',
        hasValidPosition ? position : '',
    ]?.filter(Boolean)?.join(' ');

    // Build inline styles for required parameters
    const buttonStyles = {
        fontSize: text_font_size === "text-xs" ? "14px" : text_font_size,
        fontFamily: text_font_family || 'Roboto',
        fontWeight: text_font_weight === "font-medium" ? "500" : text_font_weight,
        lineHeight: text_line_height === "leading-xs" ? "17px" : text_line_height,
        textAlign: text_text_align || 'left',
        color: text_color === "text-button-text" ? "#ffffffd8" : text_color,
        backgroundColor: fill_background_color === "bg-button-background" ? "#283a61" : fill_background_color,
        borderRadius: border_border_radius === "rounded-xs" ? "3px" : border_border_radius,
    };

    // Safe click handler
    const handleClick = (event) => {
        if (disabled) return;
        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={handleClick}
            style={buttonStyles}
            className={twMerge(
                buttonClasses({ variant, size }),
                optionalClasses,
                className
            )}
            aria-disabled={disabled}
            {...props}
        >
            {children || text}
        </button>
    );
};

export default Button;
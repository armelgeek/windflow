"use client";
import Script from 'next/script';
import React from 'react'

export const LemonSquezzyLoad = () => {
    console.log('ca charge');
    const handleScriptReady = () => {
        console.log("LemonSqueezy loading");
        window.createLemonSqueezy();
        console.log("LemonSqueezy loaded");
    };
    return (
        <>
            <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" onLoad={handleScriptReady} />
        </>
    )
}

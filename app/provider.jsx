"use client";


import React from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";


const Provider = ({ children }) => {

    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);



    return (
        <ConvexProvider client={convex}>
            <div>{children}</div>
        </ConvexProvider>
    )
}

export default Provider




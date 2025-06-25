'use client'

import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api';
import AppSidebar from './_components/AppSidebar';
import React, { useEffect, useState } from 'react'
import { UserDetailsContext } from '@/context/UserContext';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const WorkspaceProvider = ({ children }) => {

    const newUserMutation = useMutation(api.users.CreateNewUser);
    const { user } = useUser();
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        user && CreateNewUser()
    }, [user])

    const CreateNewUser = async () => {
        const result = await newUserMutation({
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            picture: user?.imageUrl
        })

        // console.log(result)
        setUserDetails(result);
    }


    return (
        <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
            <SidebarProvider>
                <AppSidebar/>
                <div className='w-full p-10'>
                    <SidebarTrigger/>
                    {children}
                </div>
            </SidebarProvider>
        </UserDetailsContext.Provider>
    )
}

export default WorkspaceProvider
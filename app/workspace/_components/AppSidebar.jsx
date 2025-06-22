'use client'


import React from 'react'
import Image from 'next/image'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import {  usePathname } from 'next/navigation'
import { menuOptions } from '@/data/data'





const AppSidebar = () => {


    const path = usePathname();


    return (
        <Sidebar>
            <SidebarHeader className='flex items-center my-1' >
                <Image src={'/imgs/logo.png'} alt='Arik Alexandrov' width={200} height={10} />
            </SidebarHeader>
            <hr />
            <SidebarContent>
                <SidebarGroup >
                    <Button className={'mt-4'}>
                        + Create New Ad Video
                    </Button>
                </SidebarGroup>

                <SidebarGroup >
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                menuOptions.map((m, idx) => (
                                    <SidebarMenuItem key={idx}>
                                        <SidebarMenuButton asChild className={'p-2 text-md'}>
                                            <a href={m.path}
                                                className={m.path === path ?'text-white bg-[#3D8ABD]':'flex items-center gap-2'}>
                                                <m.icon width={12} height={14} className='w-12 h-12'/>
                                                <span >{m.title }</span>
                                                </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))
                            }
                      </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup >

            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar
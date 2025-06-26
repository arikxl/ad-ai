import React from 'react'
import WorkspaceProvider from './provider'

export const metadata = {
    // title: "AdXL AI2",
    // description: "Created by Arik Alexandrov",
    icons: {
        icon: "/imgs/icon.png",
        shortcut: "/imgs/icon.png",
        apple: "/imgs/icon.png"
        // icon: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",
        // shortcut: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",
        // apple: "https://res.cloudinary.com/arikxl/image/upload/v1750618659/Ella2023/n6s6ixzozccvvu9fs2pp.png",// or .png, .svg, etc.
    }
  };

const WorkspaceLayout = ({ children }) => {
    return (
        <main>
            <WorkspaceProvider>
                {children}
            </WorkspaceProvider>
        </main>
    )
}

export default WorkspaceLayout
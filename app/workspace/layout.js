import React from 'react'
import WorkspaceProvider from './provider'

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
import React, {ReactNode} from "react";
import Navbar from './Navbar';

interface PublicLayoutProps {
    children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return(
        <>
        <Navbar/>
        <main>{children}</main>
        </>
    );
};

export default PublicLayout;
import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .header-top {
            background-color: var(--brand-primary-green);
            font-size: var(--font-size-xs);
        }

    .display-header-top {
        display: none;
    }

    .header-top-left-item1, .header-top-left-item2, .sidebar-phone, .sidebar-mail  {
        display: flex;
        padding: var(--padding-xs);
        gap: var(--spacing-xs);
        color: var(--text-white);
    }

    .header-top-right, .sidebar-socials {
        display: flex;
        padding: var(--padding-xs);
        gap: var(--spacing-xs);
    }

    .display-nav {
        display: none;
    }

    .sidebar-nav {
        position-anchor: --root-container;
        position: fixed;
        left: anchor(left);
        top: anchor(top);
        width: 100vw;
        height: calc(100vh - 46.2px);
        background-color: var(--brand-primary-green);
        transform: translateX(-100%);
        display: flex;
        flex-direction: column;
        /* animation: sidebarSlideIn 0.3s forwards; */


    }

    .sidebar-logo-icon {
        display: flex;
        justify-content: space-between;
        padding: var(--padding-md);
        /* border-bottom: 1px solid var(--text-white); */
        border-bottom: 1px solid #6df843;
    }

    .header-logonav {
        width: 95%;
        display: flex;
        justify-content: space-between;
        padding: var(--padding-sm);

    }

    .sidebar-nav-links {
        display: flex;
        flex-direction: column;
    }

    .sidebar-nav-link {
        padding: var(--padding-lg);
        text-decoration: none;
        color: var(--text-white);
        border-radius: var(--radius-lg);
        margin: auto var(--margin-md);
        /* background-color: var(--brand-light-green); */

    }

    .sidebar-nav-link:hover {
        background-color: #75797471;
    }

    .sidebar-phone {
        border-bottom: #6df843 1px solid;
        margin: auto var(--margin-md);
    }

    .sidebar-mail {
        /* padding: var(--padding-md); */
        margin: auto var(--margin-md);

    }

    .sidebar-socials {
        align-items: center;
        justify-content: center;
        gap: var(--spacing-md);
        margin-top: auto;
    }

    .sidebar-copyright {
        text-align: center;
        color: var(--text-white);
        font-size: var(--font-size-xs);
        margin: var(--margin-md) 0;
    }

    .active {
        background-color: #75797471;
    }

    .home {
        margin-top: var(--margin-md);
    }

    .contact {
        margin-bottom: var(--margin-md);
    }

    @keyframes sidebarSlideIn {
        from {
            transform: translateX(-100%);  
        }
        to {
            transform: translateX(0);  
        }
    }

    @keyframes sidebarSlideOut {
        from {
            transform: translateX(0);   
        }
        to {
            transform: translateX(-100%); 
        
        }
    }
`;

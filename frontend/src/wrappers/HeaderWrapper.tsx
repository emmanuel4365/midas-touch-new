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

    .header-top-left-item1, .header-top-left-item2 {
        display: flex;
        padding: var(--padding-xs);
        gap: var(--spacing-xs);
    }

    .header-top-right {
        display: flex;
        padding: var(--padding-xs);
        gap: var(--spacing-xs);
    }

    .display-nav {
        display: none;
    }

    .display-sidebar {
        display: block;
    }

    .sidebar-nav {
        position-anchor: --root-container;
        position: fixed;
        left: anchor(left);
        top: anchor(top);

    }

    .header-logonav {
        width: 95%;
        display: flex;
        justify-content: space-between;
        padding: var(--padding-sm);

    }

    /* .sidebar-nav-container {
        margin-left: auto;
    } */

`;

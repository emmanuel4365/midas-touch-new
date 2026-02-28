import styled from "styled-components";

export const HeaderWrapper = styled.header`

    .header-top {
            background-color: var(--brand-primary-green);
            font-size: var(--font-size-xs);
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
`;

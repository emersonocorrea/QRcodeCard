import { styled } from "styled-components";

export const StyledCard = styled.div`
    margin-inline: auto;
    background: white;

    max-width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .625rem;

    border-radius: .5rem;

    padding: 1.25rem;

    > img{
        max-width: 240px;
        border-radius: .5rem;
    }
    
`
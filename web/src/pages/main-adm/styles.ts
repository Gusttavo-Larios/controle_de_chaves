import { Button } from 'app/components/Button';
import styled from 'styled-components';

export const Area = styled.div`
    width: 100%;
    margin-top: 1rem;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
`;

export const BaseStyledAdministrationOption = styled(Button)`
    width: 50%;
    min-height: 14rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;
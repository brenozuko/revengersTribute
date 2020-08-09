import styled from 'styled-components'
import container from '../../tools/container';
import TagRevenger from '../TagRevenger';
import TitleRevenger from '../TitleRevenger';

export const BannerRevenger = styled.section `
 display: flex; 
 justify-content: space-between;  
 align-items: center; 
 max-height: 70vh;
 height: 100vh;
 ${container}

`;

export const Text = styled.div `
padding-top: 10rem;
max-width: 45%;

${TagRevenger} {
    margin-bottom: 40rem;
}

${TitleRevenger} {
 margin-bottom: 20rem;
}
`



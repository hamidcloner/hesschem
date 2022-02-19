import styled,{ createGlobalStyle } from 'styled-components';
import devices from './mediaQuery-core';

// ===== import the fonts ======
import peydaBlack from './assets/fonts/PEYDA-BLACK.TTF';
import peydaBold from './assets/fonts/PEYDA-BOLD.TTF';
import peydaExtraBold from './assets/fonts/PEYDA-EXTRABOLD.TTF';
import peydaExtraLight from './assets/fonts/PEYDA-EXTRALIGHT.TTF';
import peydaLight from './assets/fonts/PEYDA-LIGHT.TTF';
import peydaMedium from './assets/fonts/PEYDA-MEDIUM.TTF';
import peydaRegular from './assets/fonts/PEYDA-REGULAR.TTF';
import peydaSemibold from './assets/fonts/PEYDA-SEMIBOLD.TTF';
import peydaThin from './assets/fonts/PEYDA-THIN.TTF';
import vazir from './assets/fonts/Vazir.ttf';


const columnCount = {
    oneCol : '8.33%',
    twoCol : '16.66%',
    threeCol : '25%',
    fourCol : '33.33%',
    fiveCol : '41.66%',
    sixCol : '50%',
    sevenCol : '58.33%',
    eightCol : '66.66%',
    nineCol : '75%',
    tenCol : '83.33%',
    elevenCol : '93.66%',
    twelve : '100%',
}





// define GlobalStyle 
const GlobalStyle = createGlobalStyle`
    *,::after,::before {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    };
    a {
        text-decoration : none;
    };
    ul {
        list-style : none;
    };
    

    // ====> define PEYDA fonts <====
    @font-face {
        font-family : peydaBlack;
        src : url(${peydaBlack}) format('truetype');
    };
    @font-face {
        font-family : peydaBold;
        src : url(${peydaBold}) format('truetype');
    };
    @font-face {
        font-family : peydaExtraBold;
        src : url(${peydaExtraBold}) format('truetype');
    };
    @font-face {
        font-family : peydaExtraLight;
        src : url(${peydaExtraLight}) format('truetype');
    };
    @font-face {
        font-family : peydaLight;
        src : url(${peydaExtraLight}) format('truetype');
    };


    // ===> define VAZIR fonts <===
    @font-face {
        font-family : vazir;
        src : url(${vazir}) format('truetype');
    };
`;

// define mini-framework Responsive Elements
export const MyContainer = styled.div`
    ${(props) => {
        if(!props.fluid){
            return `

                clear : both;
                width : 100%;
                margin-right : auto;
                margin-left : auto;
            

                
                @medie only screen and ${devices.smDevice} {
                    max-width : 540px;
                };
                @media only screen and ${devices.mdDevice} {
                    max-width : 720px;
                };
                @media only screen and ${devices.lgDevice} {
                    max-width : 960px
                };
                @media only screen and ${devices.xlDevice} {
                    max-width : 1140px;
                };
            `;
        };
    }};
    ${(props) => {
        if(props.fluid){
            return `
                width : 100%;
            `;

        };
    }}
`;




export const MyRow = styled.div`
    &::after {
        content : "";
        clear : both;
        display : table;
    }
`;

    // <MyCol xs={{span : 1,offset : 2}}>Test</MyCol>
export const MyCol = styled.div`
    float : right;
    padding : 0 15px;

    @media only screen and ${devices.xsDevice} {
        ${(props) => {
            if(props.xs && (props.xs.span || props.xs.offset)) {
                console.log('props',props.xs);
                return `
                    ${(props) => {
                        
                    }}
                    
                `
                // switch(props.xs.span) {
                //     case 1:
                //        return `width : 8.33%;`;
                //     case 2:
                //         return `width : 16.66%;`;
                //     case 3:
                //         return `width : 25%;`;
                //     case 4:
                //         return `width : 33.33%;`;
                //     case 5:
                //         return `width : 41.66%;`;
                //     case 6:
                //         return `width : 50%;`;
                //     case 7:
                //         return `width : 58.33;`;
                //     case 8:
                //         return `width : 66.66%;`;
                //     case 9:
                //         return `width : 75%;`;
                //     case 10:
                //         return `width : 83.33%;`;
                //     case 11:
                //         return `width : 91.66%;`;
                //     case 12:
                //         return `width : 100%;`;  

                // }
                
            };
            console.log('what is props');
            if(props.xs && props.xs.offset) {
                console.log('what is offset : ',props.xs.offset);
                switch(props.xs.offset){
                    case 0:
                        return `margin-right : 0;`;
                    case 1:
                        return `margin-right : 8.33%;`    
                    case 2:
                        return `margin-right : 16.66%;`;
                    case 3:
                        return `margin-right : 25%;`;
                    case 4:
                        return `margin-right : 33.33%;`;
                    case 5:
                        return `margin-right : 41.66%;`;
                    case 6:
                        return `margin-right : 50%;`;
                    case 7:
                        return `margin-right : 58.33%;`;
                    case 8:
                        return `margin-right : 66.66%;`;
                    case 9:
                        return `margin-right : 75%;`;
                    case 10:
                        return `margin-right : 83.33%`;
                    case 11:
                        return `margin-right : 91.66%;`;
                    case 12:
                        return `margin-right : 100%;`; 

                }

            }
        }}
    }





`;

        // these are true

// ${(props) => {
//     if(props.xs){
//         return `
//             @media only screen and ${devices.xsDevice} {
//                 background-color : ${props.xs.span};
//             }
//         `
//     }
// }}

// @media only screen and ${devices.xsDevice} {
//     ${(props) => {
//         if(props.xs) {
//             return `background-color : ${props.xs.span};`;
//         }
//     }}
// }
export default GlobalStyle;
// @media only screen and ${devices.xsDevice}{
//     ${(props) => {
//         if(props.xs){
//             switch(props.xs.span){
//                 case 1:
//                     return `width : 8.33%;`;
//                 case 2:
//                     return `width : 16.66%;`;
//                 case 3:
//                     return `width : 25%;`;
//                 case 4:
//                     return `width : 33.33%;`;
//                 case 5:
//                     return `width : 41.66%;`;
//                 case 6:
//                     return `width : 50%;`;
//                 case 7:
//                     return `width : 58.33;`;
//                 case 8:
//                     return `width : 66.66%;`;
//                 case 9:
//                     return `width : 75%;`;
//                 case 10:
//                     return `width : 83.33%;`;
//                 case 11:
//                     return `width : 91.66%;`;
//                 case 12:
//                     return `width : 100%;`;                                

//             };
//             switch(props.xs.offset){
//                 case 0:
//                     return `margin-right : 0;`;
//                 case 1:
//                     return `margin-right : 8.33%;`    
//                 case 2:
//                     return `margin-right : 16.66%;`;
//                 case 3:
//                     return `margin-right : 25%;`;
//                 case 4:
//                     return `margin-right : 33.33%;`;
//                 case 5:
//                     return `margin-right : 41.66%;`;
//                 case 6:
//                     return `margin-right : 50%;`;
//                 case 7:
//                     return `margin-right : 58.33%;`;
//                 case 8:
//                     return `margin-right : 66.66%;`;
//                 case 9:
//                     return `margin-right : 75%;`;
//                 case 10:
//                     return `margin-right : 83.33%`;
//                 case 11:
//                     return `margin-right : 91.66%;`;
//                 case 12:
//                     return `margin-right : 100%;`;                                    
//             }
//         }
        
//     }}

// };


// @media only screen and ${devices.smDevice} {
//     ${(props) => {
//         if(props.sm){
//             switch(props.sm.span){
//                 case 1:
//                     return `width : 8.33%;`;
//                 case 2:
//                     return `width : 16.66%;`;
//                 case 3:
//                     return `width : 25%;`    ;
//                 case 4:
//                     return `width : 33.33%;`;
//                 case 5:
//                     return `width : 41.66%;`;
//                 case 6:
//                     return `width : 50%;`;
//                 case 7:
//                     return `width : 58.33;`;
//                 case 8:
//                     return `width : 66.66%;`;
//                 case 9:
//                     return `width : 75%;`;
//                 case 10:
//                     return `width : 83.33%;`;
//                 case 11:
//                     return `width : 91.66%;`;
//                 case 12:
//                     return `width : 100%;`; 
                
//             };
//             switch(props.sm.offset){
//                 case 0:
//                     return `margin-right : 0;`;
//                 case 1:
//                     return `margin-right : 8.33%;`    
//                 case 2:
//                     return `margin-right : 16.66%;`;
//                 case 3:
//                     return `margin-right : 25%;`;
//                 case 4:
//                     return `margin-right : 33.33%;`;
//                 case 5:
//                     return `margin-right : 41.66%;`;
//                 case 6:
//                     return `margin-right : 50%;`;
//                 case 7:
//                     return `margin-right : 58.33%;`;
//                 case 8:
//                     return `margin-right : 66.66%;`;
//                 case 9:
//                     return `margin-right : 75%;`;
//                 case 10:
//                     return `margin-right : 83.33%`;
//                 case 11:
//                     return `margin-right : 91.66%;`;
//                 case 12:
//                     return `margin-right : 100%;`; 

//             }
//         }
//     }}
// };

// @media only screen and ${devices.mdDevice} {
//     ${(props) => {
//         if(props.md) {
//             switch(props.md.span){
//                 case 1:
//                     return `width : 8.33%;`;
//                 case 2:
//                     return `width : 16.66%;`;
//                 case 3:
//                     return `width : 25%;`    ;
//                 case 4:
//                     return `width : 33.33%;`;
//                 case 5:
//                     return `width : 41.66%;`;
//                 case 6:
//                     return `width : 50%;`;
//                 case 7:
//                     return `width : 58.33;`;
//                 case 8:
//                     return `width : 66.66%;`;
//                 case 9:
//                     return `width : 75%;`;
//                 case 10:
//                     return `width : 83.33%;`;
//                 case 11:
//                     return `width : 91.66%;`;
//                 case 12:
//                     return `width : 100%;`; 

//             };
//             switch(props.md.offset){
//                 case 0:
//                     return `margin-right : 0;`;
//                 case 1:
//                     return `margin-right : 8.33%;`    
//                 case 2:
//                     return `margin-right : 16.66%;`;
//                 case 3:
//                     return `margin-right : 25%;`;
//                 case 4:
//                     return `margin-right : 33.33%;`;
//                 case 5:
//                     return `margin-right : 41.66%;`;
//                 case 6:
//                     return `margin-right : 50%;`;
//                 case 7:
//                     return `margin-right : 58.33%;`;
//                 case 8:
//                     return `margin-right : 66.66%;`;
//                 case 9:
//                     return `margin-right : 75%;`;
//                 case 10:
//                     return `margin-right : 83.33%`;
//                 case 11:
//                     return `margin-right : 91.66%;`;
//                 case 12:
//                     return `margin-right : 100%;`; 
                
//             }
//         }
//     }}
// };

// @media only screen and ${devices.lgDevice} {
//     ${(props) => {
//         if(props.lg){
//             switch(props.lg.span){
//                 case 1:
//                     return `width : 8.33%;`;
//                 case 2:
//                     return `width : 16.66%;`;
//                 case 3:
//                     return `width : 25%;`;
//                 case 4:
//                     return `width : 33.33%;`;
//                 case 5:
//                     return `width : 41.66%;`;
//                 case 6:
//                     return `width : 50%;`;
//                 case 7:
//                     return `width : 58.33;`;
//                 case 8:
//                     return `width : 66.66%;`;
//                 case 9:
//                     return `width : 75%;`;
//                 case 10:
//                     return `width : 83.33%;`;
//                 case 11:
//                     return `width : 91.66%;`;
//                 case 12:
//                     return `width : 100%;`; 

//             };
//             switch(props.lg.offset){
//                 case 0:
//                     return `margin-right : 0;`;
//                 case 1:
//                     return `margin-right : 8.33%;`    
//                 case 2:
//                     return `margin-right : 16.66%;`;
//                 case 3:
//                     return `margin-right : 25%;`;
//                 case 4:
//                     return `margin-right : 33.33%;`;
//                 case 5:
//                     return `margin-right : 41.66%;`;
//                 case 6:
//                     return `margin-right : 50%;`;
//                 case 7:
//                     return `margin-right : 58.33%;`;
//                 case 8:
//                     return `margin-right : 66.66%;`;
//                 case 9:
//                     return `margin-right : 75%;`;
//                 case 10:
//                     return `margin-right : 83.33%`;
//                 case 11:
//                     return `margin-right : 91.66%;`;
//                 case 12:
//                     return `margin-right : 100%;`; 

//             }
//         }
//     }}
// };


// @media only screen and ${devices.xlDevice} {
//     ${(props) => {
//         switch(props.xl.span){
//             case 1:
//                 return `width : 8.33%;`;
//             case 2:
//                 return `width : 16.66%;`;
//             case 3:
//                 return `width : 25%;`    ;
//             case 4:
//                 return `width : 33.33%;`;
//             case 5:
//                 return `width : 41.66%;`;
//             case 6:
//                 return `width : 50%;`;
//             case 7:
//                 return `width : 58.33;`;
//             case 8:
//                 return `width : 66.66%;`;
//             case 9:
//                 return `width : 75%;`;
//             case 10:
//                 return `width : 83.33%;`;
//             case 11:
//                 return `width : 91.66%;`;
//             case 12:
//                 return `width : 100%;`; 
//         };
//         switch(props.xl.offset){
//             case 0:
//                 return `margin-right : 0;`;
//             case 1:
//                 return `margin-right : 8.33%;`    
//             case 2:
//                 return `margin-right : 16.66%;`;
//             case 3:
//                 return `margin-right : 25%;`;
//             case 4:
//                 return `margin-right : 33.33%;`;
//             case 5:
//                 return `margin-right : 41.66%;`;
//             case 6:
//                 return `margin-right : 50%;`;
//             case 7:
//                 return `margin-right : 58.33%;`;
//             case 8:
//                 return `margin-right : 66.66%;`;
//             case 9:
//                 return `margin-right : 75%;`;
//             case 10:
//                 return `margin-right : 83.33%`;
//             case 11:
//                 return `margin-right : 91.66%;`;
//             case 12:
//                 return `margin-right : 100%;`; 

//         }
//     }}
// };

// @media only screen and ${devices.xxlDevice} {
//     ${(props) => {
//         if(props.xxl){
//             switch(props.xxl.span){
//                 case 1:
//                     return `width : 8.33%;`;
//                 case 2:
//                     return `width : 16.66%;`;
//                 case 3:
//                     return `width : 25%;`    ;
//                 case 4:
//                     return `width : 33.33%;`;
//                 case 5:
//                     return `width : 41.66%;`;
//                 case 6:
//                     return `width : 50%;`;
//                 case 7:
//                     return `width : 58.33;`;
//                 case 8:
//                     return `width : 66.66%;`;
//                 case 9:
//                     return `width : 75%;`;
//                 case 10:
//                     return `width : 83.33%;`;
//                 case 11:
//                     return `width : 91.66%;`;
//                 case 12:
//                     return `width : 100%;`; 

//             };
//             switch(props.xxl.offset){
//                 case 0:
//                     return `margin-right : 0;`;
//                 case 1:
//                     return `margin-right : 8.33%;`    
//                 case 2:
//                     return `margin-right : 16.66%;`;
//                 case 3:
//                     return `margin-right : 25%;`;
//                 case 4:
//                     return `margin-right : 33.33%;`;
//                 case 5:
//                     return `margin-right : 41.66%;`;
//                 case 6:
//                     return `margin-right : 50%;`;
//                 case 7:
//                     return `margin-right : 58.33%;`;
//                 case 8:
//                     return `margin-right : 66.66%;`;
//                 case 9:
//                     return `margin-right : 75%;`;
//                 case 10:
//                     return `margin-right : 83.33%`;
//                 case 11:
//                     return `margin-right : 91.66%;`;
//                 case 12:
//                     return `margin-right : 100%;`; 

//             }
//         }
//     }}
// };
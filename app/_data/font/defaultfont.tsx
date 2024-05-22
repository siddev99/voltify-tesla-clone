import localFont from "next/font/local";

const myFont = localFont({ 
    src: [{
        path :'../../../public/fonts/gothamssm_medium.otf',
        weight :'500',
        style:'medium',
        },
        {
        path :'../../../public/fonts/gothamssm_light.otf',
        weight :'300',
        style: 'light',
         },

          {
        path :'../../../public/fonts/gothamssm_bold.otf',
        weight :'700',
        style: 'bold',
         },
          ],
          preload: true,
          variable: '--font-go',
 });

 export {myFont};
import {unstable_createMuiStrictModeTheme} from '@material-ui/core'

export default unstable_createMuiStrictModeTheme({
     palette:{
        primary:{
           main:'#56B7BA', 
           contrastText:'#fff',
        },
        secondary:{
            main:'#03142F', 
         },
    },
    typography:{
        fontFamily:'Poppins, sans-serif',
        button:{
            fontWeight:600,
            textTransform:'capitalize',
        },
        h4:{
           fontWeight:600,
        }
    },
});
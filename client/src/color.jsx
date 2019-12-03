import {createMuiTheme} from '@material-ui/core/styles';

// Crie seu próprio tema:
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#26a69a',
            main: '#00897b',
            dark: '#00695c',
            contrastText: '#f2f2f2',
        },
        secondary: {
            main: '#212121'
        }
    },
});

export default theme
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PaperSheet from './paper';
import ButtonAppBar from './navigation'

function Background() {
    return (
        <React.Fragment>
            <CssBaseline />
            <ButtonAppBar />
            <Container fixed>
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                <PaperSheet />
            </Container>
        </React.Fragment>
    );
}

export default Background;
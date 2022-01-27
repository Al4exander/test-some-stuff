import Grid from '@mui/material/Grid';

const SearchGrid = (props) => {
    return (
        <Grid
            style={{marginTop: 0}}
            sx = { { flexGrow: 1 } } container
            spacing = { 4 }
            justifyContent = 'center'>
            { props.children?.map((component, index) => (
                <Grid
                    item xs = { 12 }
                    sm = { 6 }
                    lg = { 6 }
                    md = { 6 }
                    key = { index }>
                    { component }
                </Grid>
            )) }
        </Grid>
    );
};

export default SearchGrid;

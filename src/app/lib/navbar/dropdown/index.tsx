import { Box } from "@mui/material"

type DropdownType = {
    children: React.ReactElement
    open: boolean
}

export const Dropdown = (props: DropdownType) => {
    return (
        <Box
            component={"div"}
            sx={{
                bgcolor: 'background.default',
                color: 'primary.contrastText',
                boxShadow: '0 0 5px #0005',
                zIndex: 11111,
                position: 'absolute',
                display: props.open ? 'block' : 'none', 
            }}
        > 
        { props.children }
        </Box>
    )
}

export default Dropdown

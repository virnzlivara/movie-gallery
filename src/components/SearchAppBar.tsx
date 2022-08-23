import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import TextField from '@mui/material/TextField/TextField';
import { useAppSelector } from '../app/hooks';
import { selectHistory } from '../features/movie/movieSlice';
 
interface IProps {
  onSearchMovie: (query: string) => void;
  title: string;
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

  
const SearchAppBar = (props: IProps) => {
  const history = useAppSelector(selectHistory); 
  const [historyItems, setHistoryItems]= React.useState(history);
  
  React.useEffect(()=>{
    const removeDup: React.SetStateAction<string[]>  = [];
    history.map((item: string)=>{
      if (item !== undefined && !removeDup.includes(item)){
        removeDup.push(item);
      }
    }) 
    setHistoryItems(removeDup);
  },[history])
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      props.onSearchMovie(e.target.value)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Autocomplete
        freeSolo
        id="free-solo-8-demo"
        fullWidth
        disableClearable
        options={historyItems}
        renderInput={(params) => (
          
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <TextField style={{color: 'white'}}
              {...params}
              placeholder="Search…"
              InputProps={{
                ...params.InputProps,
                type: 'search',
                style: {color: 'white', paddingLeft: '40px'}
              }}
              onKeyDown={(e: any) => handleKeyDown(e)}
            /> 
          </Search> 
        )}
      />
           
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar;

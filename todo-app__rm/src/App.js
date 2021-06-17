import './App.css';
import {MainListItems,SecondaryListItems} from './component/UserInfo'
import {User} from './component/User'
import {Task} from './component/TaskInfo'
import {Tag} from './component/TaskTag'
import VirtualizedList from './component/ToDoList'
import Grid from '@material-ui/core/Grid';

const App =()=>{
  return (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <User />
        <Task />
        <Tag />
      </Grid>
      <Grid item xs={6} >
        <VirtualizedList />
      </Grid>
    </Grid>

  </div>)
}

export default App;

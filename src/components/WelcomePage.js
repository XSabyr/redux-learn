import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const WelcomePage = () => {
  let history = useHistory();

  return (
    <div>
      <h1>Hello im your new welcome page</h1>
      <Button variant="contained" color="primary" onClick={history.push('/courses')}>
        Courses
      </Button>
    </div>
  );
};

export default WelcomePage;

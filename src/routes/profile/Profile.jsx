import { useProfileQuery } from '../../redux/api/profileApi';
import { Outlet } from 'react-router-dom'
import Container from '../../container/Container';

const Profile = () => {
  const {data} = useProfileQuery();
  return (
    <div>
      <Container>
        <div>
          <h1>Profile</h1>
          <p>{data?.username}</p>
          <Outlet />
        </div>
      </Container>
    </div>
  )
}

export default Profile
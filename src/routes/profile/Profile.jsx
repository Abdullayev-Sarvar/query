import { useProfileQuery } from '../../redux/api/profileApi';
import { Outlet } from 'react-router-dom'
import Container from '../../container/Container';

const Profile = () => {
  const {data} = useProfileQuery();

  return (
    <div>
      <Container>
      <div className="w-full h-[85vh] flex items-center justify-center">
      {data && data.payload && (
        <div className="bg-transparent border border-gray-300 shadow-xl rounded-lg p-6 w-full max-w-[400px] transition-all hover:scale-95">
          <div className="flex items-center gap-10">
            <img 
              src={data.payload.photo_url} 
              alt="Profile_image" 
              className="w-28 h-28 rounded-full border-4 shadow-xl transition-all hover:scale-110"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{data.payload.username}</h1>
              <p className="text-gray-500">{data.payload.first_name}</p>
              <button className="w-full border border-red-500 rounded-xl py-2 text-red-500 text-center mt-5 transition-all hover:border-none hover:bg-red-500 hover:text-white" onClick={() => localStorage.removeItem("token")}>Log out</button>
            </div>
          </div>
        </div>
      )}
      <Outlet/>
    </div>
      </Container>
    </div>
  )
}

export default Profile
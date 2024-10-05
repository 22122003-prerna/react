import UserCard from "./components/UserCard"
import Prernapic from "./assets/Prerna Photo .jpg"
import Priyanshapic from "./assets/Priyansha Pic.jpg"
import Pic from "./assets/Prerna Pic.jpg"
import './index.css';

function App() {
  return (
    <div className="flex h-screen">
      <UserCard name="Prerna Jain" desc="Enthusiastic about technology and web development" image={Prernapic}/>
      <UserCard name="Priyansha Jain" desc="Loves creativity and design in the digital world" image={Priyanshapic}/>
      <UserCard name="Paras Upadhayay" desc="Blockchain enthusiast and tech speaker" image={Pic} imageSize="w-48 h-20"/>
    </div>
  )
}

export default App

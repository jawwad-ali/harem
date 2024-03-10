import Image from "next/image";
import LoginCover from "@/assets/login_cover.png";
import { Input } from "@/components/ui/input";
import GoogleSignIn from "@/assets/google.png";
import FacbookSignIn from "@/assets/facebook.png";
import DiscordSignIn from "@/assets/icons8-discord.png";
import TwitterSignIn from "@/assets/icons8-twitterx.png";

const thirdPartyIcons = [
  GoogleSignIn,
  FacbookSignIn,
  DiscordSignIn,
  TwitterSignIn,
];

const Login = () => {
  return (
    <div className="relative login-cover">
      {/* Background Image */}
      {/* <Image
        className="object-cover w-screen h-screen"
        src={LoginCover}
        alt="Login Cover" 
      /> */}

      {/* Sidebar */}
      <div className="absolute top-0 left-0 w-[510px] h-screen bg-[#111727] bg-opacity-90">
        <p className="text-white flex space-x-2 text-xl font-bold pl-9 pt-6">
          <label>Harem:</label>
          <span>Project Maid</span>
        </p>
        <h1 className="text-white text-center text-5xl font-bold pt-8">
          Welcome
        </h1>

        <div className="mx-auto w-[425px] mt-10">
          <form>
            <Input
              placeholder="User name"
              className="text-white my-6"
              type="text"
            />
            <Input
              placeholder="Password"
              className="text-white my-6"
              type="password"
            />
            <Input
              placeholder="Reset Password"
              className="text-white"
              type="password"
            />
          </form>
          <div className="flex text-center items-center justify-between mt-12">
            <div className="w-[120px] h-[1px] bg-white bg-opacity-25" />

            <p className="text-sm text-white text-opacity-25">
              Sign in with accounts
            </p>

            <div className="w-[120px] h-[1px] bg-white bg-opacity-25" />
          </div>

          {/* Third Party Auth Icons */}

          <div className="flex flex-col justify-center items-center mt-10">
            <div className="flex justify-between w-[225px]">
              {thirdPartyIcons.map((auth,idx) => (
                <button className="bg-black flex items-center justify-center w-12 h-10 rounded-xl"key={idx}>
                  <Image src={auth} alt="Sign In" className="h-6 w-6" />
                </button>
              ))}
            </div>
            {/* Register Button */}
            <a href="#">
              <button className="text-white bg-[#43B581] font-bold text-3xl rounded-sm px-20 py-3 mt-7">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

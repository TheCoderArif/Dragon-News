import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className=" *:w-full">
      <h2 className="font-semibold flex-start text-start">Login With</h2>
      <div className="flex flex-col *:my-1">
        <button className="btn">
          <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

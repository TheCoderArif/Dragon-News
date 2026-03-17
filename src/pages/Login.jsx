import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-2xl text-center">Login your account.</h3>
          <form action="">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="font-semibold">
              Don't have an account ?{" "}
              <Link className="text-red-500" to="/auth/register">
                Register
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className="text-2xl text-center">Register your account.</h3>
            <form action="">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Photo-url</label>
              <input type="text" className="input" placeholder="Photo-url" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div className="font-semibold">
                Already have an account ?{' '} 
                <Link className="text-red-500" to="/auth">
                   Login
                </Link>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

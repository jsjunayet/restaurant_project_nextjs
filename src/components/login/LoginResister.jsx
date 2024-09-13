

export default function LoginRegister() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-blue-200">
      <div className={`container relative bg-white rounded-3xl shadow-lg overflow-hidden w-[768px] h-[480px]`}>
        <div className="form-container sign-in absolute inset-0 w-1/2 p-10 flex flex-col justify-center items-center transition-transform duration-600 z-20 left-0">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <div className="social-icons flex space-x-3 my-5">
            <a href="#" className="icon border border-gray-300 rounded-full p-3"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon border border-gray-300 rounded-full p-3"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon border border-gray-300 rounded-full p-3"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon border border-gray-300 rounded-full p-3"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span className="text-sm">or use your email password</span>
          <input type="email" placeholder="Email" className="input mt-4" />
          <input type="password" placeholder="Password" className="input mt-4" />
          <a href="#" className="text-sm text-purple-600 mt-2">Forget Your Password?</a>
          <button className="button mt-4">Sign In</button>
        </div>
        <div className="toggle-container absolute inset-0 w-1/2 h-full bg-purple-700 text-white transition-transform duration-600 transform translate-x-full">
          <div className="toggle flex items-center justify-center h-full flex-col space-y-5">
                <h1 className="text-3xl font-bold">Welcome Back!</h1>
                <p className=' px-5 text-center'>Enter your personal details to use all site features</p>
                <button className="button mt-4">Sign In</button>

          </div>
        </div>
      </div>
    </div>
  );
}

import Marquee from "react-fast-marquee";

const SimpleBanner = () => {
  return (
    <div>
      <Marquee pauseOnHover speed={100}>
       <div>
       <img
          className="h-96 w-80"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        />
       </div>
       <div>
       <img
          className="h-96 w-80"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        />
       </div>
       <div>
       <img
          className="h-96 w-80"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        />
       </div>
       <div>
       <img
          className="h-96 w-80"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        />
       </div>
       <div>
       <img
          className="h-96 w-80"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        />
       </div>
       <div>
       <img
          className="h-96 w-80"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        />
       </div>
      </Marquee>
      <div>
        <h1 className="text-7xl font-bold text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-400">Our Services</h1>
        <p></p>
      </div>
    </div>
  );
};

export default SimpleBanner;

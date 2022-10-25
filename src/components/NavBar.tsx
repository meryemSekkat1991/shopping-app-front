import {Button, Navbar} from "react-daisyui";

const NavBar = () => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="flex w-full">
        <div className="flex-none">
          <Button shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
        <div className="flex-1">
          <Button className="text-xl normal-case" color="ghost">
            daisyUI
          </Button>
        </div>
        <div className="flex-none">
          <button className="btn avatar btn-circle btn-ghost">
            <div className="w-10 rounded-full"><img src="https://api.lorem.space/image/face?hash=33791"/></div>
          </button>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;

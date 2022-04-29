import React from "react";

const SideNav = ({ display = "none", closeNav }) => {
  return (
    <div style={{ display: "flex" }}>
	{display!== 'none' && <button onClick={closeNav}>X</button>}
      <div className="sidenav" style={{ display: display }}>
        <div>
          <a href="/Home">Home</a>
        </div>
        <div>
          <a href="/Upload-book">Upload</a>
        </div>
        <div>
          <a href="/Cart">Cart</a>
        </div>
        <div>
          <a href="/Settings">Settings</a>
        </div>
      </div>
      <div>
        <div>
          <i class="fa fa-home"></i>
        </div>
        <div>
          <i class="fa fa-upload"></i>
        </div>
        <div>
          <i class="fa fa-shopping-cart"></i>
        </div>
        <div>
          <i class="fa fa-gear"></i>
        </div>
      </div>
    </div>
  );
};
export default SideNav;

import React from 'react'

const Sider = () => {
  return (
    <div>
      <a href="tel:7620068106">
        <img
          src="https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635935_IweuYhCqZRtHp3SLguQL8svOVroVXvvZ.jpg"
          alt="Logo"
          className="h-14 w-auto rounded-full border-2 border-green-500 shadow-md fixed bottom-20 right-7 z-50"
        />
      </a>
      <a href="/report">
        <img
          src="https://img.freepik.com/free-psd/colorful-3d-illustration-data-visualization-dashboard-transparent-background_84443-29288.jpg?t=st=1737637489~exp=1737641089~hmac=e248051c505540f051c05da869be86e434f1db463ce99addc3d56537595d8dab&w=740"
          alt="Logo"
          className="h-14 w-auto rounded-full border-2 border-red-600 shadow-md fixed bottom-40 right-7 z-50"
        />
      </a>
      {/* <div className=" bg-red-600 text-white w-auto text-center  border-white shadow-md fixed bottom-20 right-7 z-50">
      call on :7620068106
      </div> */}
    </div>
  );
}

export default Sider

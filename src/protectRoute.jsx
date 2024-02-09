import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {

    let auth = sessionStorage.getItem('token');
 
    if (auth === "true") {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
}
export default ProtectRoute;
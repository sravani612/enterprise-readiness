import React from 'react';
import { Route, Routes } from "react-router-dom";

import ExecutionReadiness from "../view";

export default function PageRoute() {
    return(
        <Routes>
            <Route index element={<ExecutionReadiness />} />
            <Route path="/executionReadiness" element={<ExecutionReadiness />} />
        </Routes>
    )
};

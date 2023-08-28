// AccountsWrapper.js
import React from "react";
import {Typography} from "antd";
const JobsWrapper = ({totalJobs}) => {
  return (
    <div class="d-flex justify-content-between align-items-center">
      <div class="p-2">
        <Typography.Title level={4} className="mt-2">
          Jobs
        </Typography.Title>
      </div>
      <div class="p-2 fs-6">
        <strong>{totalJobs}</strong>
      </div>
    </div>
  );
};

export default JobsWrapper;

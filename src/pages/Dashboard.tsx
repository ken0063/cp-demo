import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { VIEWER_QUERY } from '../providers/queries';
import Loaders from '../component/Loaders';

interface ViewerData {
  id: string;
  me: {
    firstName: [];
    lastName: string;
    email: string;
    phone: string;
    status: string;
  };
}

const Dashboard = () => {
  const { loading, data, refetch } = useQuery<{
    viewer: ViewerData;
  }>(VIEWER_QUERY, {
    async onCompleted() {
      // console.log(data);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <div className="flex flex-col h-screen w-full max-w-screen-3xl bg-gray-200 items-center justify-center ">
        {loading ? (
          <Loaders />
        ) : (
          <>
            <div className="text-left">
              Name:{' '}
              {`${data?.viewer?.me?.firstName} ${data?.viewer?.me?.lastName}`}
            </div>
            <div>Email:{data?.viewer?.me?.email}</div>
            <div>Phone Number:{`0${data?.viewer?.me?.phone}`}</div>
            <div>Status:{data?.viewer?.me?.status}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;

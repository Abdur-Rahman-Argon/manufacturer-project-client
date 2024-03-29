import React from "react";
import useMyOrder from "../../utilites/useMyOrder";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Order from "./Order";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [myOrders] = useMyOrder(user);

  // const {
  //   data: myOrders,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery("orders", () =>
  //   fetch(`https://adm-industry-ltd.onrender.com/orders/${user?.email}`).then((res) =>
  //     res.json()
  //   )
  // );

  // if (isLoading || loading) {
  //   return <Loading></Loading>;
  // }

  return (
    <div className=" px-4 title1">
      <div>
        {myOrders?.length === 0 ? (
          <>
            <h1 className="  text-3xl font-semibold text-center my-10">
              You Have No Any Order
            </h1>
          </>
        ) : (
          <>
            <h1 className="  text-3xl font-semibold text-center my-10">
              My all Order Here (<span>{myOrders?.length}</span>)
            </h1>
          </>
        )}
      </div>
      <div>
        {myOrders?.length === 0 ? (
          <></>
        ) : (
          <>
            {myOrders?.map((orders) => (
              <Order key={orders._id} orders={orders}></Order>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrder;

const TopCustomers_data = [
  { user: "John Doe", totalOrders: 443, TotalSpending: "$2355" },
  { user: "Anthony Baker", totalOrders: 453, TotalSpending: "$655" },
  { user: "Joh van", totalOrders: 443, TotalSpending: "$2355" },
  { user: "min Doe", totalOrders: 443, TotalSpending: "$2355" },
  { user: "John Doe", totalOrders: 443, TotalSpending: "$2355" },
];

const LatestOrders_data = [
  {
    orderId: "#OD1711",
    user: "John",
    totalPrice: "$900",
    date: "17 Jun 2021",
    status: "pending",
  },
  {
    orderId: "#OD1711",
    user: "John",
    totalPrice: "$900",
    date: "17 Jun 2021",
    status: "paid",
  },
  {
    orderId: "#OD1711",
    user: "John",
    totalPrice: "$900",
    date: "17 Jun 2021",
    status: "pending",
  },
  {
    orderId: "#OD1711",
    user: "John",
    totalPrice: "$900",
    date: "17 Jun 2021",
    status: "pending",
  },
  {
    orderId: "#OD1711",
    user: "John",
    totalPrice: "$900",
    date: "17 Jun 2021",
    status: "Refund",
  },
];

export const TopCustomers = () => {
  return (
    <div className="topcutomers">
      <h1 className="fs-4 mb-3">Top Customers</h1>
      <div className="table-wrapper">
        <table className="w-100">
          <thead>
            <tr className="">
              <td>User</td>
              <td>Total Orders </td>
              <td>Total Spending</td>
            </tr>
          </thead>
          <tbody>
            {TopCustomers_data.map((customer) => {
              return (
                <>
                  <tr>
                    <td>{customer.user}</td>
                    <td>{customer.totalOrders}</td>
                    <td>{customer.TotalSpending}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" view-all  text-center mt-3 fw-bold ">View all</div>
    </div>
  );
};

export const LatestOrders = () => {
  return (
    <div className="orders">
      <h1 className="fs-4 mb-3">Latest Orders</h1>
      <div className="table-wrapper">
        <table className="w-100">
          <thead>
            <tr>
              <td>Order Id</td>
              <td>User</td>
              <td>Total Price</td>
              <td>Date</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {LatestOrders_data.map((order) => {
              return (
                <>
                  <tr>
                    <td>{order.orderId}</td>
                    <td>{order.user}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.date}</td>
                    <td>
                      <span>{order.status}</span>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" view-all  text-center mt-3 fw-bold ">View all</div>
    </div>
  );
};

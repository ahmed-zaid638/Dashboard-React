import "./customers.css";
import data from "./customersData.json";

const Customers = () => {
  return (
    <div className="customers">
      <h1 className="fs-3 mb-4 fw-bold ">Customers</h1>
      <div className="table-wrapper">
        <table className="w-100">
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Total Order</td>
              <td>Total Spend</td>
              <td>Location</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <>
                  <tr>
                     <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item["Total Orders"]}</td>
                    <td>{item["Total Spend"]}</td>
                    <td>{item.Location}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
       
       <div className="pagination">
         <div>a;fg</div>
       </div>
    </div>
  );
};

export default Customers;

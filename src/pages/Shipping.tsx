import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {

  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });
  const submitHandler = () => {};
  const changeHandler = () => {};
  return (
    <div className="shipping">
      <button className="back-btn" onClick={()=> navigate('/cart')}>
        <BiArrowBack/>
      </button>
      <form onSubmit={submitHandler}>
        <h1>Shipping Address</h1>
        <input
          name="address"
          type="text"
          required
          placeholder="Address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />

        <input
          name="city"
          type="text"
          required
          placeholder="City"
          value={shippingInfo.city}
          onChange={changeHandler}
        />

        <input
          name="state"
          type="text"
          required
          placeholder="State"
          value={shippingInfo.state}
          onChange={changeHandler}
        />

          <select 
          name="country" 
          required 
          value={shippingInfo.country}
          onChange={changeHandler}
          >
               <option value="">Choose Country</option>
               <option value="india">India</option>
          </select>
        <input
          name="pinCode"
          type="number"
          required
          placeholder="Pin Code"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <button type="submit">PAY NOW</button>
      </form>
    </div>
  );
};

export default Shipping;

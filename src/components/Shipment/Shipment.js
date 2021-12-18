import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager.js';
import '../../style.css'

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = data => {
    const saveCart = getDatabaseCart()
    const ordersInfor = {
      ...loggedInUser,
      product: saveCart,
      Shipment: data,
      orderTime: new Date()
    }
    fetch('https://pacific-inlet-47816.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ordersInfor)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          processOrder()
          alert('your order is placed successfully')
        }
      })
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="row justify-content-center" style={{marginTop: "100px"}}>
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mt-4">
            <input className='form-control' name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}
          </div>
          <div className="form-group mt-4">
            <input className='form-control' name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div className="form-group mt-4">
            <input className='form-control' name="address" ref={register({ required: true })} placeholder="Your Address" />
            {errors.address && <span className="error">Address is required</span>}
          </div>
          <div className="form-group mt-4">
            <input className='form-control' name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span className="error">Phone Number is required</span>}
          </div>
          <div className="form-group mt-4">
            <input type="submit" className='btn btn-primary' value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
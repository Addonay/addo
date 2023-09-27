import React from 'react';

function Payment() {
  return (
    <div className="container">
      <h1 className="h3 mb-5">Payment</h1>
      <div className="row">
        {/* Left */}
        <div className="col-lg-9">
          <div className="accordion" id="accordionPayment">
            {/* Credit card */}
            <div className="accordion-item mb-3">
              <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCC" aria-expanded="false">
                  <input className="form-check-input" type="radio" name="payment" id="payment1" />
                  <label className="form-check-label pt-1" htmlFor="payment1">
                    Credit Card
                  </label>
                </div>
                <span>
                  <svg width="34" height="25" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path for Credit Card */}
                  </svg>
                </span>
              </h2>
              <div id="collapseCC" className="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                <div className="accordion-body">
                  <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Name on card</label>
                        <input type="text" className="form-control" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-3">
                        <label className="form-label">Expiry date</label>
                        <input type="text" className="form-control" placeholder="MM/YY" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-3">
                        <label className="form-label">CVV Code</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PayPal */}
            <div className="accordion-item mb-3 border">
              <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePP" aria-expanded="false">
                  <input className="form-check-input" type="radio" name="payment" id="payment2" />
                  <label className="form-check-label pt-1" htmlFor="payment2">
                    PayPal
                  </label>
                </div>
                <span>
                  <svg width="103" height="25" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path for PayPal */}
                  </svg>
                </span>
              </h2>
              <div id="collapsePP" className="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                <div className="accordion-body">
                  <div className="px-2 col-lg-6 mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="col-lg-3">
          <div className="card position-sticky top-0">
            <div className="p-3 bg-light bg-opacity-10">
              <h6 className="card-title mb-3">Order Summary</h6>
              <div className="d-flex justify-content-between mb-1 small">
                <span>Subtotal</span> <span>$21,444.50</span>
              </div>
              <div className="d-flex justify-content-between mb-1 small">
                <span>Shipping</span> <span>$5,000.00</span>
              </div>
              <div className="d-flex justify-content-between mb-1 small">
                <span>Coupon (Code: NEWYEAR)</span> <span className="text-danger">-$10.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 small">
                <span>TOTAL</span> <strong className="text-dark">$26,444.50</strong>
              </div>
              <div className="form-check mb-3 small">
                <label className="form-check-label" htmlFor="subscribe">
                  Your Vehicle order will be placed and you will recieve an enail with your order number. You will also be updated on the location every two hours and you'll receive your order within 5 business days.
                </label>
              </div>
              <button className="btn btn-primary w-100 mt-2">Place order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-column-2">
              <MdOutlineSecurity className="icon" />
              <h3>Non-Contact Shipping</h3>
            </div>

            <div className="services-column-2">
              <GiReceiveMoney className="icon" />
              <h3>Money-Back Guarantee</h3>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
    text-align: center;
    box-shadow: rgba(0 ,0 ,0 , 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
  

  .services-column-2 {
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.bg};
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    border-radius: 2rem;
    text-align: center;
    box-shadow: rgba(0, 0, 0 , 0.05) 0px 1px 2px 0px;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        justify-content: center;
    }
  }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;


export default Services;
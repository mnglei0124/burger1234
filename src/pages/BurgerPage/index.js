import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/general/Modal";
import OrderSummary from "../../components/OrderSummary";
import { useNavigate } from "react-router-dom";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  let navigate = useNavigate();
  const continueOrder = () => {
    const params = [];
    for (let name in props.burgerIngredients) {
      params.push(name + "=" + props.burgerIngredients[name]);
    }

    params.push("price=" + props.price);
    navigate({
      pathname: "/ship",
      search: params.join("&"),
    });
    closeConfirmModal();
  };

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div>
      <Modal close={closeConfirmModal} show={confirmOrder}>
        <OrderSummary onCancel={closeConfirmModal} onContinue={continueOrder} />
      </Modal>

      <Burger />
      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;

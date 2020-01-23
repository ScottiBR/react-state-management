import { take, takeLatest, call, all } from "redux-saga/effects";

import { ActionTypes } from "./Actions";

function* Saga() {
  yield takeLatest(ActionTypes.CHECKOUT, checkoutFlow);
}

function* checkoutFlow({ payload }) {
  while (true) {
    yield call(() => console.log("checkPaymentMethod"));

    yield take("CONFIRM_CHECKOUT");

    yield call(() => console.log("billingService"));

    yield all([
      call(() => console.log("sendConfirmationEmail")),
      call(() => console.log("removeItemFromStock"))
    ]);
  }
}

export default Saga;

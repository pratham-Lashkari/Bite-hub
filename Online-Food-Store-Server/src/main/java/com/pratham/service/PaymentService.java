package com.pratham.service;

import com.pratham.model.Order;
import com.pratham.response.PaymentResponse;

public interface PaymentService {
  public PaymentResponse createPaymentLink(Order order);
}

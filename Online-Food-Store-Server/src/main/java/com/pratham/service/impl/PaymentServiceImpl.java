package com.pratham.service.impl;

import org.springframework.stereotype.Service;

import com.pratham.model.Order;
import com.pratham.response.PaymentResponse;
import com.pratham.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {

  @Override
  public PaymentResponse createPaymentLink(Order order) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'createPaymentLink'");
  }

}

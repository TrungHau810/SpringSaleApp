package com.tthau.services;

import com.tthau.pojo.Cart;
import java.util.List;

/**
 *
 * @author Trung Hau
 */
public interface ReceiptService {

    void addReceipt(List<Cart> carts);
}

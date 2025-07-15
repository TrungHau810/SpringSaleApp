package com.tthau.repositories;

import com.tthau.pojo.Cart;
import java.util.List;

/**
 *
 * @author Trung Hau
 */
public interface ReceiptRepository {

    void addReceipt(List<Cart> carts);
}

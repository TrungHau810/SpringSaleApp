package com.tthau.repositories.impl;

import com.tthau.pojo.Cart;
import com.tthau.pojo.OrderDetail;
import com.tthau.pojo.SaleOrder;
import com.tthau.repositories.ReceiptRepository;
import com.tthau.repositories.UserRepository;
import java.util.Date;
import java.util.List;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Trung Hau
 */
@Repository
public class ReceiptRepositoryImpl implements ReceiptRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Autowired
    private UserRepository userRepo;

    @Override
    public void addReceipt(List<Cart> carts) {
        if (carts != null) {
            Session s = this.factory.getObject().getCurrentSession();
            SaleOrder order = new SaleOrder();
            order.setUserId(this.userRepo.getUserByUsername("dhthanh"));
            order.setCreatedDate(new Date());
            s.persist(order);

            for (var x : carts) {
                OrderDetail d = new OrderDetail();
                d.setQuantity(x.getQuantity());
                d.setUnitPrice(x.getPrice());
                d.setProductId(new ProductRepositoryImpl().getProductById(x.getId()));
                d.setOrderId(order);

                s.persist(d);
            }
        }

    }

}

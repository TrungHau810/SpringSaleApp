/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.tthau.services;

import com.tthau.pojo.Product;
import java.util.List;
import java.util.Map;

/**
 *
 * @author admin
 */
public interface ProductService {

    List<Product> getProducts(Map<String, String> params);

    void addOrUpdateProduct(Product p);

    Product getProductById(int id);

    void deleteProduct(int id);
}

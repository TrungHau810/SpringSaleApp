package com.tthau.services;

import java.util.List;

/**
 *
 * @author Trung Hau
 */
public interface StatsService {

    List<Object[]> statsRevenueByProduct();

    List<Object[]> statsRevenueByTime(String time, int year);
}

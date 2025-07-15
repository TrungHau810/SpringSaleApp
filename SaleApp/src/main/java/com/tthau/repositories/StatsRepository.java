package com.tthau.repositories;

import java.util.List;

/**
 *
 * @author Trung Hau
 */
public interface StatsRepository {
    List<Object[]> statsRevenueByProduct();
    List<Object[]> statsRevenueByTime(String time, int year);
}

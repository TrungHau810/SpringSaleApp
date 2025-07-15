package com.tthau.controllers;

import com.tthau.services.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author Trung Hau
 */
@Controller
public class StatsController {

    @Autowired
    private StatsService statsService;

    @GetMapping("/stats")
    public String stats(Model model) {
        model.addAttribute("productRevenues", statsService.statsRevenueByProduct());

        return "stats";
    }
}

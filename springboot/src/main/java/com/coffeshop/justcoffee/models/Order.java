package com.coffeshop.justcoffee.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Order implements Serializable {
    private long id;
    private LocalDateTime now;
    private List<Long> coffeeDrinks = new ArrayList<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDateTime getNow() {
        return now;
    }

    public void setNow(LocalDateTime now) {
        this.now = now;
    }

    public List<Long> getCoffeeDrinks() {
        return coffeeDrinks;
    }

    public void setCoffeeDrinks(List<Long> coffeeDrinks) {
        this.coffeeDrinks = coffeeDrinks;
    }

    //    public void addCoffeeOrder(long coffeeOrderId) {
//        coffeeDrinks.add(coffeeOrderId);
//    }
}
package com.pratham.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Restaurant")
public class Restaurant {

}

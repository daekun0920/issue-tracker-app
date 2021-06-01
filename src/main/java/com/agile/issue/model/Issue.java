package com.agile.issue.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "issues")
@Entity
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "severity")
    private String severity;

}

package com.agile.issue.controller;

import com.agile.issue.model.Issue;
import com.agile.issue.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/issue")
@CrossOrigin("*")
public class IssueController {

    private final IssueService service;

    @Autowired
    public IssueController(IssueService service) {
        this.service = service;
    }

    @GetMapping
    public List<Issue> getIssues() {
        return service.getIssues();
    }

    @PostMapping
    public void addIssue(@RequestBody Issue issue) {

        service.addIssue(issue);
    }

    @DeleteMapping(path = "{id}")
    public void deleteIssue(@PathVariable("id") Long id) {

        service.deleteIssue(id);

    }

}

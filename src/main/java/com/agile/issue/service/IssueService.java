package com.agile.issue.service;

import com.agile.issue.model.Issue;
import com.agile.issue.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    @Autowired
    private IssueRepository repository;

    public List<Issue> getIssues() {
        return repository.findAll();
    }

    public void addIssue(Issue issue) {
        repository.save(issue);
    }

    public void deleteIssue(Long id) {
        repository.deleteById(id);
    }
}
